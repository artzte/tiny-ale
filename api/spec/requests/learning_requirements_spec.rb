# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Learning requirements API', type: :request do
  before(:each) do
    cat = LearningRequirement.categories.first
    %w{1.1 1.2}.each do |seq|
      create :learning_requirement, seq: seq, ealr: "#{cat} #{seq}", category: cat
    end
  end

  describe 'GET /api/learning-requirements' do
    it 'returns all learning-requirements' do
      get '/api/learning-requirements'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      length = LearningRequirement.count
      expect(json['data'].size).to eq(length)
      expect(json['meta']['count']).to eq(length)
    end
  end

  describe 'GET /api/learning-requirements/categories' do
    it 'returns a 200 with successful get' do
      get "/api/learning-requirements/categories", headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json.size).to eq(LearningRequirement.categories.length)
    end
  end

  describe 'POST /api/admin/learning-requirements' do
    before do
      @category = LearningRequirement.categories.last
    end

    it 'creates a requirement' do
      count = LearningRequirement.count
      seq = '99.9'
      ealr = 'The student shall be able to pass a test'

      body = {
        data: {
          attributes: {
            category: @category,
            ealr: ealr,
            seq: seq,
          }
        }
      }

      post "/api/admin/learning-requirements", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      new_count = LearningRequirement.count
      expect(new_count).to eq(count + 1)

      new_ealr = LearningRequirement.find_by_category_and_ealr_and_seq @category, ealr, seq
      expect(new_ealr).not_to be_nil
    end

    it 'updates a requirement' do
      count = LearningRequirement.count
      ealr = LearningRequirement.first
      seq = '99.9'

      body = {
        data: {
          attributes: {
            seq: seq
          }
        }
      }

      put "/api/admin/learning-requirements/#{ealr.id}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']['id']).to eq(ealr.id.to_s)
      expect(json['data']['attributes']['seq']).to eq(seq)
      expect(json['data']['attributes']['category']).to eq(ealr.category)
      new_count = LearningRequirement.count
      expect(new_count).to eq(count)

      new_ealr = LearningRequirement.find_by_category_and_ealr_and_seq ealr.category, ealr.ealr, seq
      expect(ealr).not_to be_nil
    end

    it 'deletes a requirement' do
      count = LearningRequirement.count
      ealr = LearningRequirement.first
  
      delete "/api/admin/learning-requirements/#{ealr.id}", headers: json_request_headers
  
      expect(response).to have_http_status(204)
      expect(body).to be_empty

      new_count = LearningRequirement.count
      expect(new_count).to eq(count - 1)
  
      deleted_ealr = LearningRequirement.find_by_category_and_ealr_and_seq ealr.category, ealr.ealr, ealr.seq
      expect(deleted_ealr).to be_nil
    end
  end
end
