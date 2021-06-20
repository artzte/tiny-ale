import { helper } from '@ember/component/helper';

export default helper(function join(params, hash = {}) {
  const { separator = '' } = hash;
  return params.join(separator);
});
