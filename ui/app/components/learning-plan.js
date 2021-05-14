import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LearningPlanComponent extends Component {
  @tracked learningPlan = null;

  @tracked isEditing = false;

  @tracked allLearningPlanGoals = null;

  @service('tinyData') tinyData;

  constructor(...args) {
    super(...args);

    this.learningPlan = this.args.learningPlan;
  }

  get showPersonalGoals() {
    return this.isEditing || this.args.learningPlan.attributes.personalGoals;
  }

  get requiredLearningPlanGoals() {
    const {
      tinyData,
      learningPlan,
      isEditing,
    } = this;

    if (isEditing) {
      const { allLearningPlanGoals } = this;
      if (!allLearningPlanGoals) return [];

      return allLearningPlanGoals && allLearningPlanGoals.filter(goal => goal.attributes.required);
    }

    return learningPlan
      .relationships
      .learningPlanGoals
      .data
      .map(ref => tinyData.get('learningPlanGoal', ref.id))
      .filter(goal => goal.attributes.required);
  }

  @action async createLearningPlan() {
    console.log('createLearningPlan')
  }

  @action async edit() {
    if (!this.allLearningPlanGoals) {
      const result = await this.tinyData.fetch(`/api/learning-plan-goals/${this.args.year}`);
      this.allLearningPlanGoals = result.data;
    }
    this.isEditing = true;
  }

  @action async save() {

  }

  @action cancel() {
    this.isEditing = false;
  }
}
