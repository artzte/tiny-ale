import { helper } from '@ember/component/helper';
import MarkdownIt from 'markdown-it';
import { htmlSafe } from '@ember/string';

export default helper(params => {
  const [text] = params;
  const md = new MarkdownIt();

  return htmlSafe(md.render(text || ''));
});
