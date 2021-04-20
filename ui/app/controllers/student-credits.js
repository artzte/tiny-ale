import Controller from '@ember/controller';
import dayjs from 'dayjs';
import { inject as service } from '@ember/service';
import { replaceModel } from '../utils/json-api';
import clone from '../utils/clone';

export default Controller.extend({
  tinyData: service(),
  flashMessages: service(),

  actions: {
    updateSelectedCredits(creditAssignments) {
      this.set('selectedCredits', creditAssignments);
    },
    async combineCredits(combineModel) {
      const { student } = this;
      const url = `/api/students/${student.id}/credit-assignments`;

      const model = clone(combineModel);

      if (!model.attributes.enableOverride) {
        delete model.attributes.creditsOverride;
      }
      delete model.attributes.enableOverride;

      const newCreditAssignment = await this.tinyData.fetch(url, {
        method: 'POST',
        data: {
          data: model,
        },
      });

      const note = (combineModel.attributes.note || '').trim();
      if (note) {
        await this.createNote(newCreditAssignment.data, note);
      }

      this.hideCombineDialog();

      this.send('refreshModel');

      this.flashMessages.success('Credits were combined.');
    },
    async splitCredit(creditAssignment) {
      const url = `/api/credit-assignments/${creditAssignment.id}`;

      await this.tinyData.fetch(url, {
        method: 'DELETE',
      });

      this.send('refreshModel');

      this.flashMessages.success('Credits were split.');
    },
    hideCombine() {
      this.hideCombineDialog();
    },
    async showCombine(creditsToCombine) {
      if (!this.terms) {
        const terms = await this.tinyData.fetch('/api/terms?status=active');
        this.terms = terms.data;
      }

      this.setProperties({
        creditsToCombine,
        showCombineDialog: true,
        terms: this.terms,
      });
    },
    async approveCredit(creditAssignment) {
      const { student } = this;
      const isApproved = Boolean(creditAssignment.attributes.districtFinalizeApprovedOn);
      const districtFinalizeApprovedOn = dayjs().format('YYYY-MM-DD');
      let url;

      if (isApproved) {
        url = `/api/students/${student.id}/credit-assignments/${creditAssignment.id}/unapprove`;
      } else {
        url = `/api/students/${student.id}/credit-assignments/${creditAssignment.id}/approve`;
      }

      const newCreditAssignment = await this.tinyData.fetch(url, {
        method: 'PUT',
        data: {
          data: {
            attributes: {
              districtFinalizeApprovedOn,
            },
          },
        },
      });

      const { creditAssignments } = this;
      this.set('creditAssignments', replaceModel(creditAssignments, newCreditAssignment.data));

      return newCreditAssignment;
    },
  },

  hideCombineDialog() {
    this.set('showCombineDialog', false);
  },
});
