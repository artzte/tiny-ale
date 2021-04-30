# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Admin learning plan goals API', type: :request do
  before(:each) do
    @goal1 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: true, position: 1
    @goal2 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: true, position: 2
    @goal3 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: true, position: 3
    @goal4 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: true, position: 4
    @goal5 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: false, required: true, position: 5

    # make a little piggy-wiggy outa order
    @goal0 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: true, position: 0
  end

  describe 'GET /api/admin/learning-plan-goals' do
    it 'returns a 200 with the expected count of learning plan goals in the expected order' do
      get '/api/admin/learning-plan-goals', headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json).not_to be_empty
      expect(json['data']).not_to be_empty

      expect(json['meta']['count']).to eq(LearningPlanGoal.count)

      expect(json['data'].first['id']).to eq(@goal0.id.to_s)
      expect(json['data'].last['id']).to eq(@goal5.id.to_s)
    end
  end

  describe 'PUT /api/admin/learning-plan-goals/:id/reorder' do
    it 'returns a 200 with successful reordering to first position' do
      body = {
        data: {
          attributes: {
            position: 0
          }
        }
      }
      put "/api/admin/learning-plan-goals/#{@goal5.id}/reorder", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json).not_to be_empty
      expect(json['data']).not_to be_empty

      expect(json['meta']['count']).to eq(LearningPlanGoal.count)

      expect(json['data'].first['id']).to eq(@goal5.id.to_s)
      expect(json['data'].second['id']).to eq(@goal0.id.to_s)
      expect(json['data'].last['id']).to eq(@goal4.id.to_s)
    end

    it 'returns a 200 with successful reordering to second position' do
      body = {
        data: {
          attributes: {
            position: 1
          }
        }
      }
      put "/api/admin/learning-plan-goals/#{@goal5.id}/reorder", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json).not_to be_empty
      expect(json['data']).not_to be_empty

      expect(json['meta']['count']).to eq(LearningPlanGoal.count)

      expect(json['data'].first['id']).to eq(@goal0.id.to_s)
      expect(json['data'].second['id']).to eq(@goal5.id.to_s)
      expect(json['data'].last['id']).to eq(@goal4.id.to_s)
    end
 
    it 'returns a 200 with successful reordering to last position' do
      body = {
        data: {
          attributes: {
            position: 99
          }
        }
      }
      put "/api/admin/learning-plan-goals/#{@goal3.id}/reorder", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json).not_to be_empty
      expect(json['data']).not_to be_empty

      expect(json['meta']['count']).to eq(LearningPlanGoal.count)

      expect(json['data'].first['id']).to eq(@goal0.id.to_s)
      expect(json['data'].second['id']).to eq(@goal1.id.to_s)
      expect(json['data'].last['id']).to eq(@goal3.id.to_s)
    end
  end

  describe 'POST /api/admin/learning-plan-goals' do
    it 'returns a 200 with successful goal creation' do
      postBody = {
        data: {
          attributes: {
            description: Faker::Lorem.paragraph,
            active: true,
            required: true,
          },
        }
      }
      post '/api/admin/learning-plan-goals', params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']['id']).not_to be_empty

      attributes = json['data']['attributes']
      %w[description status required active].each do |key|
        expect(attributes[key]).to eq(postBody[:data][:attributes][key.to_sym])
      end
    end

    it 'requires minimum input set or yields 422' do
      postBody = {
        data: {
          attributes: {
            description: 'boof'
          }
        }
      }
      post '/api/admin/learning-plan-goals', params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(422)

      expect(json).not_to be_empty

      expect(json['status']).to eq(422)
      expect(json['errors']).not_to be_empty
      expect(json['message']).not_to be_empty
    end
  end
end
