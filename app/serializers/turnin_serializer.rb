class TurninSerializer < ApplicationSerializer
  set_type :turnin

  attribute :status
  belongs_to :assignment
  belongs_to :enrollment
end
