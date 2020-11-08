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

  describe 'GET /contract/:id' do
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

  describe 'PUT /contract/:id' do
    it 'updates learning requirements and returns updates' do
      learning_requirement = create :learning_requirement
      post_body = {
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
      
      put "/api/contracts/#{@contract1_2008.id}", params: post_body.to_json, headers: json_request_headers

      expect(@contract1_2008.learning_requirements.length).to eq(1)

      expect(json['data']['relationships']['learningRequirements']['data'][0]['id']).to eq(learning_requirement.id.to_s)
    end
  end
end