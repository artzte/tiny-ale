import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SettingsCompetenciesIndexController extends Controller {
  queryParams = ['category'];

  @tracked category = '';
  @tracked confirmDelete = false;
  @tracked competency = null;

  get categoryCompetencies() {
    const { category, competencies } = this;

    if (!competencies) return [];

    if (category === '') return competencies.data;

    return competencies.data.filter(competency => competency.attributes.category === category)
  }

  showConfirmDialog(competency) {
    this.competency = competency;
    this.showDialog = true;
    return new Promise((resolve, reject) => {
      this.confirmDelete = resolve;
      this.rejectDelete = reject;
    });
  }

  @action
  confirmDelete() { this.confirmDelete() }

  @action
  rejectDelete() { this.rejectDelete(); }

  @action
  async deleteCompetency(competency) {
    this.competency = competency;

    await this.showConfirmDialog(competency);

    await this.tinyData.fetch(`/api/admin/competencies/${competency.id}`, {
      method: 'DELETE'
    });

    this.flashMessages.success(`Deleted ${competency.attributes.category} ${competency.attributes.seq}`);
    
  }
}
