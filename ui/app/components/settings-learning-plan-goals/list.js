import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const isDraggingOverTopClasses = 'pt-20';

export default class SettingsLearningPlanGoalsListComponent extends Component {
  @tracked draggedItem = null;

  @tracked isDraggingOverTop = false;

  get isDraggingOverTopClasses() {
    if (!this.isDraggingOverTop) return null;
    if (this.draggedItem === 0) return null;

    return isDraggingOverTopClasses;
  }

  @action dropItem(dropTarget) {
    this.doReorderGoals(this.args.goals[this.draggedItem], dropTarget);

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
      this.doReorderGoals(this.args.goals[this.draggedItem], 0);
    }

    this.draggedItem = null;
    this.isDraggingOverTop = false;
  }

  @action doReorderGoals(goal, newPosition) {
    console.log(goal.attributes.position, newPosition, goal.attributes.description);
  }
}
