import Component from '@glimmer/component';
import MarkdownIt from 'markdown-it';
import { inject as service } from '@ember/service';

export default class NotesListItem extends Component {
  @service('tinyData') tinyData;

  get creator() {
    return this.tinyData.get('user', this.args.note.relationships.creator.data.id);
  }

  get formattedNote() {
    const md = new MarkdownIt();
    return md.render(this.args.note.attributes.note || '');
  }
}
