import { helper } from '@ember/component/helper';
import MarkdownIt from 'markdown-it';
import { htmlSafe } from '@ember/string';

export default helper(params => {
  const [text, altText] = params;
  const md = new MarkdownIt();
  const output = md.render(text || '');

  if (output.trim() === '' && altText) return htmlSafe(md.render(altText));

  return htmlSafe(output);
});
