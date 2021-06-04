import Service, { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import clone from '../utils/clone';

const UserServiceMembers = {
  tinyData: service(),

  setUser(user) {
    this._data = {
      user,
    };
  },

  getUser() {
    return clone(this._data.user);
  },

  canEdit(object) {
    return !!object;
  },

  /* Perform a search for users.
   * @param {Object} options | search options
   * @param {string} options.status | credit status - default is 'active', pass 'all' to see all
   * @param {number} options.limit | limit
   * @param {string} options.order | order string; default is 'name'
   * @param {string} options.name | search string to match against name components
   * @param {string} options.scope | data scope; currently, only 'contract:contractId' permitted
   * @returns {Promise} fetch promise
   */
  searchStudents({
    status = 'active',
    limit = 10,
    order = 'lastName, firstName',
    name = null,
    scope = null,
  }) {
    const { tinyData } = this;
    return tinyData.fetch('/api/students', {
      query: {
        name,
        status,
        scope,
        limit,
        order,
      },
    });
  },
};

export default Service.extend(UserServiceMembers);

export function stubUserService(fixtures) {
  return Service.extend({
    ...UserServiceMembers,
    searchStudents() {
      return Promise.resolve(fixtures.searchStudents);
    },
  });
}
