import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  noResultsMessage: 'No results were found',
  count: 0,
  tagName: '',
  hasResults: computed.gt('count', 0),
});
