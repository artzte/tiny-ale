import { helper } from '@ember/component/helper';

export function capitalize(str) {
  const string = str.toString();
  return `${(string)[0].toUpperCase()}${string.substr(1)}`;
}

function breakAtCaps(match, offset) {
  if (offset > 0) return ` ${match.toLowerCase()}`;

  return match.toLowerCase();
}

// Capitalizes the first word in the phrase; lowercases the rest;
// breaks words at caps.
export function titleize(params/* , hash */) {
  const [title] = params;

  if (!title) return title;

  const uncamelized = title.replace(/[A-Z]/g, breakAtCaps);

  return capitalize(uncamelized);
}

export default helper(titleize);
