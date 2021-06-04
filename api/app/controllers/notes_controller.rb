# frozen_string_literal: true

class NotesController < ApiBaseController
  def index
    conditions = {}

    conditions[:notable_type] = params[:notableType] if params[:notableType]

    conditions[:notable_id] = params[:notableIds].split(',') if params[:notableIds]

    result = Note
             .where(conditions)
             .order('created_at DESC')
             .limit(@limit)
    count = Note
            .where(conditions)
            .count

    options = {
      meta: {
        count: count
      },
      include: ['creator']
    }

    render json: NoteSerializer.new(result, options)
  end

  def create
    klass = target_class

    notable = klass.find params[:notable_id]

    attributes = note_attributes
    attributes[:notable] = notable
    attributes[:creator] = current_user

    note = Note.create! attributes

    render json: NoteSerializer.new(note)
  end

  def update
    note = Note.find(params[:id])

    privilege = note.privileges(current_user)

    render status: :forbidden, json: { message: 'You cannot edit this note' } unless privilege == Note::PRIVILEGE_EDIT

    note.note = note_attributes[:note]

    note.save!

    render json: NoteSerializer.new(note)
  end

  def destroy
    note = Note.find(params[:id])

    privilege = note.privileges(current_user)

    render status: :forbidden, json: { message: 'You cannot delete this note' } unless privilege == Note::PRIVILEGE_EDIT

    note.destroy!

    render nothing: true, status: 204
  end

protected

  def query_attributes
    params
      .permit(:notable_type, :notable_ids)
  end

  def note_attributes
    params
      .require(:data)
      .require(:attributes)
      .permit(:note)
  end

  def target_class
    unless %w[credit-assignment enrollment status turnin assignment].include? params[:notable_type]
      raise TinyException, 'Invalid notable type'
    end

    params[:notable_type]
      .underscore
      .camelcase
      .constantize
  end
end
