import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { dasherize } from '@ember/string';
import { replaceModel } from '../utils/json-api';
import Validator from '../utils/validator';

export default class NotesList extends Component {
  @service('tinyData') tinyData;

  @tracked _notes;

  @tracked noteToEdit;

  validator = new Validator({
    note: [{
      type: 'required',
    }],
  });

  get notes() {
    return this._notes || this.args.notes;
  }

  createNote(note) {
    const {
      type,
      id,
    } = note.relationships.notable.data;
    return this.tinyData.fetch(`/api/notes/${dasherize(type)}/${id}`, {
      method: 'POST',
      data: { data: note },
    });
  }

  updateNote(note) {
    return this.tinyData.fetch(`/api/notes/${note.id}`, {
      method: 'PUT',
      data: { data: note },
    });
  }

  get creator() {
    const { noteToEdit } = this;

    if (!noteToEdit) return null;

    if (!noteToEdit.id) {
      return this.tinyData.getUser();
    }

    return this.tinyData.get('user', noteToEdit.relationships.creator.data.id);
  }

  @action showAdd() {
    this.noteToEdit = {
      attributes: {
        note: '',
      },
      relationships: {
        notable: {
          data: this.args.notable,
        },
      },
    };
  }

  @action showEdit(note) {
    this.noteToEdit = note;
  }

  @action async save(note) {
    try {
      if (note.id) {
        const newModel = await this.updateNote(note);
        this._notes = replaceModel(this.notes, newModel.data);
      } else {
        const newModel = await this.createNote(note);
        this._notes = [newModel.data, ...this.notes];
      }
    } catch (e) {
      this.flashMessages.danger(`Could not save your note - error was ${e.message}`);
    }
    this.cancelEdit();
  }

  @action cancelEdit() {
    this.noteToEdit = null;
  }

  @action reportError(error) {
    console.error(error);
  }
}
