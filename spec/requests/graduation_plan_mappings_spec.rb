# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Graduation plan mappings API', type: :request do
  before(:each) do
    setup_contract

    @graduation_plan = create :graduation_plan, user: @student1

    @req1 = create :graduation_plan_requirement, requirement_type: :credit, name: 'Language'
    @req2 = create :graduation_plan_requirement, requirement_type: :credit, name: 'Math'

    credit1 = create :credit, course_name: 'Language 1'
    credit2 = create :credit, course_name: 'Math 1'

    @credit_assignment_1 = create :credit_assignment, credit: credit1, user: @student1, contract_term: @term
    @credit_assignment_2 = create :credit_assignment, credit: credit2, user: @student1, contract_term: @term
    @credit_assignment_3 = create :credit_assignment, credit: credit2, user: @student1, contract_term: @term

    @mapping1 = create :graduation_plan_mapping, graduation_plan_requirement: @req1, credit_assignment: @credit_assignment_1, graduation_plan: @graduation_plan
    @mapping2 = create :graduation_plan_mapping, graduation_plan_requirement: @req2, credit_assignment: @credit_assignment_2, graduation_plan: @graduation_plan
  end

  describe 'GET /api/graduation-plan-mappings/:student_id' do
    it 'returns a 200 with the student\'s mappings' do
      get "/api/graduation-plan-mappings/#{@student1.id}", headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['meta']['count']).to eq(2)
      expect(json['data'].length).to eq(2)
    end

    it 'returns a 200 with an empty graduation plan' do
      expect(GraduationPlan.find_by_user_id(@student2.id)).to equal(nil)

      get "/api/graduation-plan-mappings/#{@student2.id}", headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['meta']['count']).to eq(0)

      expect(GraduationPlan.find_by_user_id(@student2.id)).not_to equal(nil)
    end
  end

  describe 'DELETE /api/graduation-plan-mappings/:student_id/:mapping_id' do
    it 'returns a 204 with successful deletion' do
      delete "/api/graduation-plan-mappings/#{@student1.id}/#{@mapping1.id}", headers: json_request_headers

      expect(response).to have_http_status(204)
      expect(GraduationPlanMapping.find_by_id(@mapping1.id)).to be_nil
    end
  end

  describe 'POST /api/graduation-plan-mappings/:student_id' do
    it 'returns a 200 with successful creation of a credit mapping' do
      body = {
        data: {
          relationships: {
            graduation_plan_requirement: {
              data: {
                id: @req2.id
              }
            },
            creditAssignment: {
              data: {
                id: @credit_assignment_3.id
              }
            }
          }
        }
      }

      post "/api/graduation-plan-mappings/#{@student1.id}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']['id']).not_to be_empty
    end

    it 'returns a 200 with successful creation of a general mapping' do
      body = {
        data: {
          relationships: {
            graduation_plan_requirement: {
              data: {
                id: @req2.id
              }
            }
          },
          attributes: {
            notes: 'When in the course of human events',
            date_completed: '2018-11-08'
          }
        }
      }

      post "/api/graduation-plan-mappings/#{@student1.id}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']['id']).not_to be_empty
      expect(json['data']['attributes']).not_to be_empty

      expect(json['data']['attributes']['notes']).to eq('When in the course of human events')
      expect(json['data']['attributes']['dateCompleted']).to eq('2018-11-08')
    end

    it 'returns a 422 with duplicate mapping' do
      body = {
        data: {
          relationships: {
            graduation_plan_requirement: {
              data: {
                id: @mapping1.graduation_plan_requirement_id
              }
            },
            creditAssignment: {
              data: {
                id: @mapping1.credit_assignment_id
              }
            }
          }
        }
      }

      post "/api/graduation-plan-mappings/#{@student1.id}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(422)
      expect(json).not_to be_empty
    end

    it 'requires minimum input set or yields 422' do
      body = {
        data: {
          relationships: {
            creditAssignment: {
              data: {
                id: @credit_assignment_3.id
              }
            }
          }
        }
      }

      post "/api/graduation-plan-mappings/#{@student1.id}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(422)

      expect(json).not_to be_empty

      expect(json['status']).to eq(422)
      expect(json['errors']).not_to be_empty
      expect(json['message']).not_to be_empty
    end
  end
end
