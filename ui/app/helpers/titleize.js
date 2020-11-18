import { helper } from '@ember/component/helper';

export function capitalize(str) {
  const string = str.toString();
  return `${(string)[0].toUpperCase()}${string.substr(1)}`;
}

export function titleize(params/* , hash */) {
  const [title] = params;

  if (!title) return title;

  const uncamelized = title.replace(/[A-Z]/, match => ` ${match.toLowerCase()}`);

  return capitalize(uncamelized);
}

export default helper(titleize);
