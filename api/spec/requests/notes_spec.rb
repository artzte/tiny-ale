# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Notes API', type: :request do
  before(:each) do
    setupEnrollments

    contract_term = @enrollment1.contract.term

    @credit_assignment_1 = create :credit_assignment, credit: @credit, user: @student1, contract_term: contract_term

    @note_for_credit_assignment_1 = create :note, notable: @credit_assignment_1, note: Faker::Lorem.paragraph, creator: @staff1
    @note_for_enrollment_1 = create :note, notable: @enrollment1, note: Faker::Lorem.paragraph, creator: @staff1
    @note_for_enrollment_2 = create :note, notable: @enrollment2, note: Faker::Lorem.paragraph, creator: @staff1

    @note_for_statusCoor01Jan = create :note, notable: @statusCoor01Jan, note: Faker::Lorem.paragraph, creator: @staff1
  end

  describe 'GET /api/notes' do
    it 'returns a 200 with all notes' do
      get '/api/notes', headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json).not_to be_empty
      expect(json['meta']['count']).to eq(Note.count)
      expect(json['data'].length).to eq(Note.count)
    end

    it 'returns a 200 with notes for both enrollments' do
      get "/api/notes?notableType=Enrollment&notableIds=#{[@enrollment1, @enrollment2].map(&:id).join(',')}", headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json).not_to be_empty

      expected_count = @enrollment1.notes.count + @enrollment2.notes.count
      expect(json['meta']['count']).to eq(expected_count)
      expect(json['data'].length).to eq(expected_count)
    end
  end

  describe 'POST /api/notes' do
    it 'returns a 200 when creating a note attached to a credit assignment' do
      body = {
        data: {
          attributes: {
            note: Faker::Lorem.paragraph
          }
        }
      }
      post "/api/notes/credit-assignment/#{@credit_assignment_1.id}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json).not_to be_empty
      expect(json['data']).to be_present
      expect(json['data']['relationships']).to be_present
      expect(json['data']['relationships']['notable']['data']).to be_present
      expect(json['data']['relationships']['notable']['data']['id']).to eq(@credit_assignment_1.id.to_s)
      expect(json['data']['relationships']['notable']['data']['type']).to eq('creditAssignment')
    end
  end

  describe 'PUT /api/notes/:id' do
    it 'returns a 200 when updating a note' do
      note = @credit_assignment_1.notes.first

      note_text = "Hallo!"
      body = {
        data: {
          attributes: {
            note: note_text
          }
        }
      }
      put "/api/notes/#{note.id}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json).not_to be_empty
      expect(json['data']).to be_present
      expect(json['data']['relationships']).to be_present
      expect(json['data']['relationships']['notable']['data']).to be_present
      expect(json['data']['relationships']['notable']['data']['id']).to eq(@credit_assignment_1.id.to_s)
      expect(json['data']['relationships']['notable']['data']['type']).to eq('creditAssignment')
      expect(json['data']['attributes']['note']).to eq(note_text)      
    end
  end

  describe 'DELETE /api/notes/:id' do
    it 'returns a 204 when updating a note' do
      note = @credit_assignment_1.notes.first

      delete "/api/notes/#{note.id}", headers: json_request_headers

      expect(response).to have_http_status(204)

      note = Note.find_by_id note.id
      expect(note).to be_nil
    end
  end
end
