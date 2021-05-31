import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

const isDraggingOverTopClasses = 'pt-20';

export default class SettingsLearningPlanGoalsListComponent extends Component {
  @service('tinyData') tinyData;

  @tracked draggedItem = null;

  @tracked isDraggingOverTop = false;

  @tracked _goals = null;

  get goals() {
    return this._goals || this.args.goals;
  }

  get filteredGoals() {
    const { year } = this.args;
    const { goals } = this;

    if (!year) return goals;

    const compareYear = parseInt(year, 10);

    return goals.filter(goal => goal.attributes.year === compareYear);
  }

  get isDraggingOverTopClasses() {
    if (!this.isDraggingOverTop) return null;
    if (this.draggedItem === 0) return null;

    return isDraggingOverTopClasses;
  }

  @action dropItem(dropTarget) {
    this.doReorderGoals(this.filteredGoals[this.draggedItem], dropTarget);

    this.draggedItem = null;
  }

  @action startDraggingItem(index) {
    this.draggedItem = index;
  }

  @action onDragOver(event) {
    event.preventDefault();

    const dragZoneHeight = this.isDraggingOverTop ? 80 : 20;

    this.isDraggingOverTop = event.offsetY < dragZoneHeight;
  }

  // eslint-disable-next-line class-methods-use-this
  @action onDragEnter(event) {
    event.preventDefault();
  }

  @action onDragLeave(event) {
    event.preventDefault();

    this.isDraggingOverTop = false;
  }

  @action onDrop(event) {
    event.preventDefault();

    if (this.isDraggingOverTop) {
      this.doReorderGoals(this.filteredGoals[this.draggedItem], 0);
    }

    this.draggedItem = null;
    this.isDraggingOverTop = false;
  }

  @action async doReorderGoals(goal, newPosition) {
    const data = { ...goal, attributes: { ...goal.attributes, position: newPosition } };
    const result = await this.tinyData.fetch(`/api/admin/learning-plan-goals/${goal.id}/reorder`, {
      method: 'PUT',
      data,
    });
    this._goals = result.data;
  }
}
