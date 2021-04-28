# frozen_string_literal: true

class NoteSerializer < ApplicationSerializer
  set_type :note

  attributes :note, :created_at, :updated_at

  belongs_to :notable, polymorphic: true
  belongs_to :creator, serializer: 'User'
end
