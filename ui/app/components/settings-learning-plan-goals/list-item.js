import Component from '@glimmer/component';
import { formatNumber } from 'accounting';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

const isDropTargetClasses = 'mb-24';
const isDraggedClasses = 'bg-gray-400';

export default class SettingsLearningPlanGoalsListItemComponent extends Component {
  @tracked isDraggingOver = false;

  @tracked isDragging = false;

  get isCurrentDropTarget() {
    return this.isDraggingOver
      && this.args.draggedItem !== null
      && this.args.draggedItem !== this.args.index + 1;
  }

  get isDropTargetClasses() {
    if (!this.isCurrentDropTarget) return null;

    return isDropTargetClasses;
  }

  get isDraggedClasses() {
    if (this.args.draggedItem !== this.args.index) return null;

    return isDraggedClasses;
  }

  get planCountPhrase() {
    const { goal } = this.args;
    const { plansCount } = goal.attributes;

    if (plansCount === 0) {
      return 'Not used in any learning plans';
    }
    if (plansCount === 1) {
      return 'Used in one learning plan';
    }
    return `Used in ${formatNumber(plansCount)} learning plans`;
  }

  @action onDragStart(event) {
    event.dataTransfer.effectAllowed = 'move';
    this.args.startDraggingItem(this.args.index);
    this.isDragging = true;
  }

  @action onDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    if (!this.isCurrentDropTarget) return;

    this.isDraggingOver = false;

    // dropping item on me, means put it after me
    this.args.dropItem(this.args.index + 1);
  }

  @action onDragEnd(event) {
    event.preventDefault();
    this.isDragging = false;
  }

  @action onDragEnter(event) {
    event.preventDefault();

    if (this.isDragging) return;

    this.isDraggingOver = true;
  }

  @action onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.isDragging) return;

    this.isDraggingOver = true;
  }

  @action onDragLeave() {
    if (this.isDragging) return;

    this.isDraggingOver = false;
  }
}
