# frozen_string_literal: true

class Note < ApplicationRecord
  include StripTagsValidator

  belongs_to :notable, polymorphic: true
  belongs_to :creator, class_name: 'User'

  PRIVILEGE_NONE = 0
  PRIVILEGE_VIEW = 1
  PRIVILEGE_EDIT = 2

  # returns the privilege level of the supplied user on this note.
  #

  # Admins have edit privilege.
  # The creator of the note has edit privilege.
  # Note-edit-enabled users of the parent object have edit privilege.
  #

  # Viewing privileges are different. A parent object sets the viewing
  # privilege policy for the notes that it contains. The assumption is that
  # the parent object will not render the note if the logged user doesn't
  # have viewing privileges. However, we are double-checking here... the
  # note won't should not get rendered for any reason if PRIVILEGE_NONE
  # is returned.

  def privileges(user, parent_priv = nil)
    return PRIVILEGE_EDIT if user.admin?
    if creator_id.nil? && user.privilege >= User::PRIVILEGE_STAFF
      return PRIVILEGE_EDIT
    end
    return PRIVILEGE_EDIT if creator_id == user.id

    parent_priv ||= notable.privileges(user)

    return PRIVILEGE_EDIT if parent_priv[:edit_note]
    return PRIVILEGE_VIEW if parent_priv[:view_note]

    PRIVILEGE_NONE
  end

end
