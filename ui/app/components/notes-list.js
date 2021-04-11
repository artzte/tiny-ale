import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { dasherize } from '@ember/string';
import { replaceModel } from '../utils/json-api';

export default class NotesList extends Component {
  @service('tinyData') tinyData;

  @tracked _notes;

  @tracked note;

  @tracked noteText;

  @tracked showDialog = false;

  get notes() {
    return this._notes || this.args.notes;
  }

  get sortedNotes() {
    const { notes } = this;
    return (notes || [])
      .sort((note1, note2) => note1.attributes.createdAt.localeCompare(note2.attributes.createdAt));
  }

  createNote(notable, note) {
    const {
      type,
      id,
    } = notable;
    return this.tinyData.fetch(`/api/notes/${dasherize(type)}/${id}`, {
      method: 'POST',
      data: {
        data: {
          attributes: {
            note,
          },
        },
      },
    });
  }

  updateNote(model, note) {
    return this.tinyData.fetch(`/api/notes/${model.id}`, {
      method: 'PUT',
      data: {
        data: {
          attributes: {
            note,
          },
        },
      },
    });
  }

  @action showAdd() {
    this.showDialog = true;
    this.note = { attributes: { note: '' } };
    this.noteText = '';
  }

  @action showEdit(note) {
    console.log('showEdit', note)
    this.showDialog = true;
    this.note = note;
    this.noteText = note.attributes.note;
  }

  @action updateNoteText(event) {
    this.noteText = event.target.value;
  }

  @action async save() {
    const {
      note,
      notable,
      noteText,
    } = this;

    try {
      if (note.id) {
        const newModel = await this.updateNote(note, noteText);
        this._notes = [newModel, ...this.notes];
      } else {
        const newModel = await this.createNote(notable, noteText);
        this._notes = replaceModel(newModel, this.notes);
      }
    } catch(e) {
      debugger;
    }
    this.showDialog = false;
  }

  @action cancelEdit() {
    this.showDialog = false;
  }
}
