import { inject as service } from '@ember/service';
import EditContractRoute from '../contract/index';

export default EditContractRoute.extend({
  tinyData: service(),
  model() {
    return {
      data: {
        attributes: {},
        relationships: {
          facilitator: {
            data: this.tinyData.getUser(),
          },
          category: {
            data: null,
          },
          enrollments: {
            data: [],
          },
          assignments: {
            data: [],
          },
          meetings: {
            data: [],
          },
          learningRequirements: {
            data: [],
          },
        },
      },
    };
  },
});
