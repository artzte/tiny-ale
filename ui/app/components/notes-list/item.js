import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class NotesListItem extends Component {
  @service('tinyData') tinyData;

  get creator() {
    return this.tinyData.get('user', this.args.note.relationships.creator.data.id);
  }
}
