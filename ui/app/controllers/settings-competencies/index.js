import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SettingsCompetenciesIndexController extends Controller {
  queryParams = ['category', 'refresh'];

  @service('tinyData') tinyData;

  @service('flashMessages') flashMessages;

  @tracked category = '';

  @tracked competency = null;

  @tracked showDialog = false;

  @tracked competencies = [];

  refresh = false;

  get categoryCompetencies() {
    const { category, competencies } = this;

    if (!competencies) return [];

    let matchedCompetencies;

    if (category === '') {
      matchedCompetencies = competencies;
    } else {
      matchedCompetencies = competencies
        .filter(competency => competency.attributes.category === category);
    }

    return matchedCompetencies
      .sort((c1, c2) => {
        try {
          const s1 = parseFloat(c1.attributes.seq);
          const s2 = parseFloat(c2.attributes.seq);

          return s1 - s2;
        } catch (e) {
          return 0;
        }
      });
  }

  showConfirmDialog(competency) {
    this.competency = competency;
    this.showDialog = true;

    return new Promise((resolve, reject) => {
      this.resolveDelete = resolve;
      this.rejectDelete = reject;
    });
  }

  @action
  confirmDelete() {
    this.resolveDelete();
  }

  @action
  cancelDelete() {
    this.rejectDelete();
  }

  @action
  async deleteCompetency(competency) {
    this.competency = competency;

    await this.showConfirmDialog(competency);

    await this.tinyData.fetch(`/api/admin/competencies/${competency.id}`, {
      method: 'DELETE',
    });

    this.tinyData.deleteRecord(competency);

    this.competencies = this.tinyData.get('competency');

    this.flashMessages.success(`Deleted ${competency.attributes.category} ${competency.attributes.seq}`);

    this.showDialog = false;
  }
}
