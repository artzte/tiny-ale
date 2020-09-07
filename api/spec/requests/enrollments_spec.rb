# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Enrollments API', type: :request do
  before(:each) do
    @staff1 = create :user, privilege: User::PRIVILEGE_STAFF, email: Faker::Internet.email

    @student1 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff1
    @student2 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff1

    @term1_2008 = create :term, name: '2008 One', school_year: 2008

    @category1 = create :category, name: 'Category 1'

    @credit = create :credit, course_name: "Boo", course_id: "Boo", course_type: Credit::TYPE_GENERAL

    @contract1_2008 = create :contract, term: @term1_2008, facilitator: @staff1, category: @category1, creator: @staff1, contract_status: Contract::STATUS_ACTIVE
    @contract2_2008 = create :contract, term: @term1_2008, facilitator: @staff1, category: @category1, creator: @staff1, contract_status: Contract::STATUS_ACTIVE

    @contract1_2008.credit_assignments.create! credit: @credit, credit_hours: 33
    @contract2_2008.credit_assignments.create! credit: @credit, credit_hours: 22

    [@student1, @student2].each do |student|
      Enrollment.enroll_user @contract1_2008, student, @staff1
    end
  end

  describe 'GET /enrollments ' do
    it 'returns all enrollment records in the system' do
      get '/api/enrollments'

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(Enrollment.count)
      expect(json['meta']['count']).to eq(Enrollment.count)

      enrollment1 = json['data'][0]
      
      expect(enrollment1['relationships']['creditAssignments']['data'].length).to eq(1)
    end
  end

  describe 'POST /contracts/:id/enrollments' do
    it 'creates enrollments' do
      post "/api/contracts/#{@contract2_2008.id}/enrollments",
        params: { data: { relationships: { user_ids: [@student1.id, @student2.id] } } }.to_json,
        headers: json_request_headers
      
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to equal(2)
      
      expect(@student1.enrollments.count).to equal(2)
      expect(@student2.enrollments.count).to equal(2)

      expect(json['data'].first['id']).not_to be_empty

      enrollment = json['data'][0]
      
      expect(enrollment['relationships']['creditAssignments']['data'].length).to eq(1)
    end
  end
end
