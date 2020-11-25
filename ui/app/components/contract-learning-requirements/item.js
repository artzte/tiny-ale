import Component from '@glimmer/component';

export default class ContractLearningRequirementsItem extends Component {
  get id() {
    return `sel-${this.args.learningRequirement.id}`;
  }

  get isChecked() {
    const {
      learningRequirement,
      selections,
    } = this.args;

    return Boolean(selections[learningRequirement.id]);
  }

  get showRow() {
    const {
      isEditing,
      learningRequirement,
      selections,
    } = this.args;

    return isEditing || selections[learningRequirement.id];
  }
}
