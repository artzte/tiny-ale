import Big from 'big.js';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  model() {
    const student = this.modelFor('student');

    this.student = student.data;

    return this.tinyData.fetch(`/api/credit-assignments?studentIds=${student.data.id}&includeFulfilledAttributes=true&include=contractTerm,contractFacilitator,contract,notes,credit`);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      combineModel: this.buildCombineModel(model.data),
      student: this.student,
      creditAssignments: model.data,
      selectedCredits: [],
      today: new Date(),
    });
  },
  actions: {
    refreshModel() {
      this.refresh();
    },
  },

  /*
 * Builds a combine model for credits
 */

  _buildCombineModel(creditAssignments) {
    const { tinyData } = this;
    const creditHours = creditAssignments
      .reduce(
        (sum, ca) => sum.add(ca.attributes.creditHours),
        new Big(0)
      );

    const [firstCredit] = creditAssignments;
    const creditCandidate = tinyData.get('credit', firstCredit.relationships.credit.data.id);
    const termCandidate = tinyData.get('term', firstCredit.relationships.contractTerm.data.id);
    const defaultCredit = creditCandidate.attributes.status === 'active' ? { id: creditCandidate.id } : null;

    return {
      id: null,
      type: 'creditAssignment',
      attributes: {
        enableOverride: false,
        creditHours,
        creditsOverride: creditHours,
      },
      relationships: {
        contractTerm: { data: termCandidate.attributes.status === 'active' ? { id: termCandidate.id } : null },
        credit: { data: defaultCredit },
        childCreditAssignments: {
          data: creditAssignments.map(ca => ({
            id: ca.id,
            type: ca.type,
          })),
        },
      },
    };
  },
});
