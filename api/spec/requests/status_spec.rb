# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Statuses API', type: :request do
  before(:each) do
    setupEnrollments

    Timecop.freeze(Date.new(2018, 10, 15))
  end

  after do
    Timecop.return
  end

  describe 'GET /api/statuses/:statusable_type' do
    it 'returns all student status records for a given month' do
      get '/api/statuses/students?months=2018-01-01,2018-02-01'

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      statuses = Status.where(statusable_type: 'User', month: ['2018-01-01', '2018-02-01'])

      expect(json['data'].size).to eq(statuses.count)
      expect(json['meta']['count']).to eq(statuses.count)

      january = json['data'].filter { |status| status['attributes']['month'] == '2018-01-01' }
      february = json['data'].filter { |status| status['attributes']['month'] == '2018-02-01' }

      expect(january.size).to eq(Status.where(statusable_type: 'User', month: ['2018-01-01']).count)
      expect(february.size).to eq(Status.where(statusable_type: 'User', month: ['2018-02-01']).count)
    end

    it 'returns status records for given enrollments' do
      get "/api/statuses/enrollments?enrollmentIds=#{@enrollment1.id},#{@enrollment2.id}"

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(6)
      expect(json['meta']['count']).to eq(6)

      enrollment1 = json['data'].find_all { |status| status['relationships']['statusable']['data']['id'] == @enrollment1.id.to_s }
      enrollment2 = json['data'].find_all { |status| status['relationships']['statusable']['data']['id'] == @enrollment2.id.to_s }

      expect(enrollment1.size).to eq(3)
      expect(enrollment2.size).to eq(3)

      expect(enrollment1.first['relationships']['creator']['data']['id'] == @staff1.id)
      expect(enrollment2.first['relationships']['creator']['data']['id'] == @staff2.id)
    end

    it 'returns status records for given students' do
      get "/api/statuses/students?studentIds=#{@student1.id}"

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(3)
      expect(json['meta']['count']).to eq(3)

      student1 = json['data'].find_all { |status| status['relationships']['statusable']['data']['id'] == @student1.id.to_s }
      student2 = json['data'].find_all { |status| status['relationships']['statusable']['data']['id'] == @student2.id.to_s }

      expect(student1.size).to eq(3)
      expect(student2.size).to eq(0)

      expect(student1.first['relationships']['creator']).not_to be_empty
      expect(student1.first['relationships']['creator']['data']['id']).to eq(@staff1.id.to_s)
    end

    it 'returns status records by type and by month utilizing abbreviated months syntax' do
      get '/api/statuses/students?months=2018-01,2018-02'

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(4)
      expect(json['meta']['count']).to eq(4)

      student1 = json['data'].find_all { |status| status['relationships']['statusable']['data']['id'] == @student1.id.to_s }
      student2 = json['data'].find_all { |status| status['relationships']['statusable']['data']['id'] == @student2.id.to_s }

      expect(student1.size).to eq(2)
      expect(student2.size).to eq(2)
    end
  end

  describe('PUT /statuses/:statusable_type/:statusable_id/:month') do
    it 'creates new status record for student' do
      month = '2020-09-01'
      status = Status.where(statusable_type: 'User', statusable_id: @student1.id, month: month).first
      expect(status).to be_nil

      attributes = {
        month: month,
        fteHours: '27.5',
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        notes: 'Very satisfactory work',
      }
      body = { attributes: attributes }

      put "/api/statuses/students/#{@student1.id}/#{month}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']['attributes']).to be_present
      expect(json['data']['id']).to be_present
      expect(json['data']['attributes']['month']).to eq(month)
      expect(json['data']['attributes']['academicStatus']).to eq(attributes[:academicStatus])
      expect(json['data']['attributes']['fteHours']).to eq(attributes[:fteHours])
      expect(json['data']['attributes']['heldPeriodicCheckins']).to eq(attributes[:heldPeriodicCheckins])
      
      expect(json['data']['relationships']).to be_present
      expect(json['data']['relationships']['notes']).to be_present

      expect(json['included']).to be_present
      note = json['included'].find{|model| model['type'] === 'note' }
      expect(note).to be_present
      expect(note['attributes']['note']).to eq(attributes[:notes])

      status = Status.where(statusable_type: 'User', statusable_id: @student1.id, month: month).first
      expect(status).not_to be_nil
    end

    it 'updates an existing status record for an enrollment' do
      statuses = Status.where(statusable_type: 'Enrollment', statusable_id: @enrollment1)
      status = statuses.first
      expect(status).to be_present
      
      month = status.month
      expect(status.academic_status).to eq(Status::STATUS_ACCEPTABLE)

      attributes = {
        attendanceStatus: 'satisfactory',
        academicStatus: 'participating',
        notes: 'He\'s off to a meh start, but promises to catch up'
      }
      body = { attributes: attributes }

      put "/api/statuses/enrollments/#{@enrollment1.id}/#{month}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']['attributes']).to be_present
      expect(json['data']['id']).to be_present
      expect(json['data']['attributes']['month']).to eq(month.strftime('%Y-%m-%d'))
      expect(json['data']['attributes']['academicStatus']).to eq(attributes[:academicStatus])
      expect(json['data']['attributes']['fteHours']).to eq(status.fte_hours)
      expect(json['data']['attributes']['heldPeriodicCheckins']).to eq(status.held_periodic_checkins)
      
      expect(json['data']['relationships']).to be_present
      expect(json['data']['relationships']['notes']).to be_present

      expect(json['included']).to be_present
      note = json['included'].find{|model| model['type'] === 'note' }
      expect(note).to be_present
      expect(note['attributes']['note']).to eq(attributes[:notes])

      statuses = Status.where(statusable_type: 'Enrollment', statusable_id: @enrollment1.id)
      status = statuses.first
      expect(status).to be_present
      expect(status.academic_status).to eq(Status::STATUS_PARTICIPATING)
    end


    it 'requires sensible values when creating a new status' do
      month = '2020-09-01'
      status = Status.where(statusable_type: 'User', statusable_id: @student1.id, month: month).first
      expect(status).to be_nil

      attributes = {
        fteHours: 'boobles',
        academicStatus: '',
      }
      body = { attributes: attributes }

      put "/api/statuses/students/#{@student1.id}/#{month}", params: body.to_json, headers: json_request_headers
      
      expect(response).to have_http_status(422)

      expect(json['message']).to eq('Validation error')
      expect(json['errors']).to be_present
      expect(json['errors']['fte_hours']).to be_present
      expect(json['errors']['academic_status']).to be_present

      body = {
        attributes: attributes.merge(academicStatus: 'satisfactory', fteHours: '27.5'),
      }

      put "/api/statuses/students/#{@student1.id}/#{month}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
    end
  end
end
