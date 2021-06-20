# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Contracts API', type: :request do
  before(:each) do
    @staff1 = create :user, privilege: User::PRIVILEGE_STAFF, email: Faker::Internet.email
    @staff2 = create :user, privilege: User::PRIVILEGE_STAFF, email: Faker::Internet.email

    @term1_2008 = create :term, name: '2008 One', school_year: 2008
    @term2_2008 = create :term, name: '2008 Two', school_year: 2008
    @term1_2009 = create :term, name: '2009 One', school_year: 2009
    @term2_2009 = create :term, name: '2009 Two', school_year: 2009

    @category1 = create :category, name: 'Category 1'
    @category2 = create :category, name: 'Category 2'

    @contract1_2008 = create :contract, term: @term1_2008, facilitator: @staff1, category: @category1, creator: @staff1, contract_status: Contract::STATUS_CLOSED
    @contract2_2008 = create :contract, term: @term2_2008, facilitator: @staff2, category: @category2, creator: @staff2, contract_status: Contract::STATUS_CLOSED
    @contract1_2009 = create :contract, term: @term1_2009, facilitator: @staff1, category: @category1, creator: @staff1
    @contract2_2009 = create :contract, term: @term2_2009, facilitator: @staff2, category: @category2, creator: @staff2

    @student1 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff1
    @student2 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff2

    [@contract1_2008, @contract1_2009].each do |contract|
      create :enrollment, participant: @student1, contract: contract, creator: @staff1
    end

    [@contract2_2008, @contract2_2009].each do |contract|
      create :enrollment, participant: @student2, contract: contract, creator: @staff2
    end
  end

  describe 'GET /contracts ' do
    it 'returns all contract records in the system' do
      get '/api/contracts'

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(4)
      expect(json['meta']['count']).to eq(4)

      get '/api/contracts?status=closed'
      expect(json['data'].size).to eq(2)
      expect(json['meta']['count']).to eq(2)

      get '/api/contracts?status=active'
      expect(json['data'].size).to eq(2)
      expect(json['meta']['count']).to eq(2)
    end
  end

  describe 'GET /contracts/:id' do
    it 'returns a detailed contract record' do
      get "/api/contracts/#{@contract1_2008.id}"

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']).not_to be_empty
      
      data = json['data']
      expect(data['attributes']['name']).to eq(@contract1_2008.name)
      expect(data['relationships']['enrollments'].size).to eq(@contract1_2008.enrollments.size)
    end
  end

  describe 'PUT /contracts/:id' do
    it 'updates learning requirements and returns updates' do
      learning_requirement = create :learning_requirement
      put_body = {
        data: {
          relationships: {
            learningRequirements: {
              data: [{
                id: learning_requirement.id
              }]
            }
          }
        }
      }
      
      put "/api/contracts/#{@contract1_2008.id}", params: put_body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(@contract1_2008.learning_requirements.length).to eq(1)

      expect(json['data']['relationships']['learningRequirements']['data'][0]['id']).to eq(learning_requirement.id.to_s)
    end

    it 'updates timeslots and returns updates' do
      put_body = {
        data: {
          attributes: {
            timeslots: [{
              start: '1:00',
              end: '2:00',
              days: '012',
            }, {
              start: '3:00',
              end: '4:00',
              days: '34',
            }]
          }
        }
      }
      
      put "/api/contracts/#{@contract1_2008.id}", params: put_body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json['data']['attributes']['timeslots'][0]['end']).to eq(put_body[:data][:attributes][:timeslots][0][:end])

      @contract1_2008.reload

      expect(@contract1_2008.timeslots[0][:start]).to eq(put_body[:data][:attributes][:timeslots][0][:start])
      expect(@contract1_2008.timeslots[1][:days]).to eq(put_body[:data][:attributes][:timeslots][1][:days])
    end
  end

  describe 'POST /contracts' do
    it 'creates a new contract' do
      sizzleana = 'Sizzleanda subterfuge'
      post_body = {
        data: {
          attributes: {
            name: sizzleana,
            location: 'Zoom 1234',
            learningObjectives: 'This and that'
          },
          relationships: {
            term: {
              data: {
                id: @term2_2009.id
              }
            },
            category: {
              data: {
                id: @category1.id,
              }
            },
            facilitator: {
              data: {
                id: @staff2.id,
              }
            }
          }
        }
      }
      
      post "/api/contracts", params: post_body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json['data']['relationships']['term']['data']['id']).to eq(@term2_2009.id.to_s)
      expect(json['data']['relationships']['facilitator']['data']['id']).to eq(@staff2.id.to_s)
      expect(json['data']['relationships']['category']['data']['id']).to eq(@category1.id.to_s)
      expect(json['data']['attributes']['name']).to eq(sizzleana)
    end
  end
end