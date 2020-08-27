# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Enrollments API', type: :request do
  before(:each) do
    @staff1 = create :user, privilege: User::PRIVILEGE_STAFF, email: Faker::Internet.email

    @student1 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff1
    @student2 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff1

    @term1_2008 = create :term, name: '2008 One', school_year: 2008

    @category1 = create :category, name: 'Category 1'

    @contract1_2008 = create :contract, term: @term1_2008, facilitator: @staff1, category: @category1, creator: @staff1, contract_status: Contract::STATUS_ACTIVE
    @contract2_2008 = create :contract, term: @term1_2008, facilitator: @staff1, category: @category1, creator: @staff1, contract_status: Contract::STATUS_ACTIVE

    [@student1, @student2].each do |student|
      create :enrollment, participant: student, contract: @contract1_2008, creator: @staff1
    end
  end

  describe 'GET /enrollments ' do
    it 'returns all enrollment records in the system' do
      get '/api/enrollments'

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(Enrollment.count)
      expect(json['meta']['count']).to eq(Enrollment.count)
    end
  end

  describe 'POST /contracts/:id/enrollments' do
    it 'creates enrollments' do
      student3 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff1
      student4 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff1
      
      post "/api/contracts/#{@contract1_2008.id}/enrollments",
        params: { data: { relationships: { user_ids: [student3.id, student4.id] } } }.to_json,
        headers: json_request_headers
      
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to equal(2)
      
      expect(student3.enrollments.count).to equal(1)
      expect(student4.enrollments.count).to equal(1)

      expect(json['data'].first['id']).not_to be_empty
    end
  end
end
