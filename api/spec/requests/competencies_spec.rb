# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Competencies API', type: :request do
  before(:each) do
    cat = Ealr.categories.first
    %w{1.1 1.2}.each do |seq|
      create :ealr, seq: seq, ealr: "#{cat} #{seq}", category: cat
    end
  end

  describe 'GET /api/competencies' do
    it 'returns all competencies' do
      get '/api/competencies'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      length = Ealr.count
      expect(json['data'].size).to eq(length)
      expect(json['meta']['count']).to eq(length)
    end
  end

  describe 'GET /api/competencies/categories' do
    it 'returns a 200 with successful get' do
      get "/api/competencies/categories", headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json.size).to eq(Ealr.categories.length)
    end
  end

  describe 'POST /api/admin/competencies' do
    before do
      @category = Ealr.categories.last
    end

    it 'creates a requirement' do
      count = Ealr.count
      seq = '99.9'
      competency = 'test'

      body = {
        data: {
          attributes: {
            category: @category,
            competency: competency,
            seq: seq,
          }
        }
      }

      post "/api/admin/competencies", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      new_count = Ealr.count
      expect(new_count).to eq(count + 1)

      new_ealr = Ealr.find_by_category_and_ealr_and_seq @category, competency, seq
      expect(new_ealr).not_to be_nil
    end

    it 'updates a requirement' do
      count = Ealr.count
      ealr = Ealr.first
      seq = '99.9'

      body = {
        data: {
          attributes: {
            seq: seq
          }
        }
      }

      put "/api/admin/competencies/#{ealr.id}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']['id']).to eq(ealr.id.to_s)
      expect(json['data']['attributes']['seq']).to eq(seq)
      expect(json['data']['attributes']['category']).to eq(ealr.category)
      new_count = Ealr.count
      expect(new_count).to eq(count)

      new_ealr = Ealr.find_by_category_and_ealr_and_seq ealr.category, ealr.ealr, seq
      expect(ealr).not_to be_nil
    end

    it 'deletes a requirement' do
      count = Ealr.count
      ealr = Ealr.first
  
      delete "/api/admin/competencies/#{ealr.id}", headers: json_request_headers
  
      expect(response).to have_http_status(204)
      expect(body).to be_empty

      new_count = Ealr.count
      expect(new_count).to eq(count - 1)
  
      deleted_ealr = Ealr.find_by_category_and_ealr_and_seq ealr.category, ealr.ealr, ealr.seq
      expect(deleted_ealr).to be_nil
    end
  end
end
