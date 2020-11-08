import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SettingsLearningRequirementsIndexController extends Controller {
  queryParams = ['category', 'refresh'];

  @service('tinyData') tinyData;

  @service('flashMessages') flashMessages;

  @tracked category = '';

  @tracked learningRequirement = null;

  @tracked showDialog = false;

  @tracked learningRequirements = [];

  refresh = false;

  get categoryLearningRequirements() {
    const { category, learningRequirements } = this;

    if (!learningRequirements) return [];

    let matchedLearningRequirements;

    if (category === '') {
      matchedLearningRequirements = learningRequirements;
    } else {
      matchedLearningRequirements = learningRequirements
        .filter(learningRequirement => learningRequirement.attributes.category === category);
    }

    return matchedLearningRequirements
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

  showConfirmDialog(learningRequirement) {
    this.learningRequirement = learningRequirement;
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
  async deleteLearningRequirement(learningRequirement) {
    this.learningRequirement = learningRequirement;

    await this.showConfirmDialog(learningRequirement);

    await this.tinyData.fetch(`/api/admin/learning-requirements/${learningRequirement.id}`, {
      method: 'DELETE',
    });

    this.tinyData.deleteRecord(learningRequirement);

    this.learningRequirements = this.tinyData.get('learningRequirement');

    this.flashMessages.success(`Deleted ${learningRequirement.attributes.category} ${learningRequirement.attributes.seq}`);

    this.showDialog = false;
  }
}
