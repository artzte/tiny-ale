import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ContractLearningRequirements extends Component {
  constructor(...args) {
    super(...args);
    this.selections = this.hashOfSelectedLearningRequirements;
  }

  @tracked isEditing = false;

  @tracked selections = null;

  @action setEdit(isEditing) {
    this.isEditing = isEditing;
    this.selections = this.hashOfSelectedLearningRequirements;
  }

  @action async save() {
    const {
      selections,
      args,
    } = this;

    const payload = {
      relationships: {
        learningRequirements: {
          data: Object.values(selections).filter(req => req),
        },
      },
    };

    await args.updateContract(payload);

    this.setEdit(false);
  }

  // replace selection hash with updated one
  //
  @action onSelect(learningRequirement) {
    const { selections } = this;

    this.selections = {
      ...selections,
      [learningRequirement.id]: selections[learningRequirement.id] ? null : learningRequirement,
    };
  }

  get hashOfSelectedLearningRequirements() {
    const { contract } = this.args;
    const { learningRequirements: selectedLearningRequirements } = contract.relationships;

    return selectedLearningRequirements
      .data
      .reduce((map, l) => ({
        ...map,
        [l.id]: l,
      }), {});
  }

  get requirementsByCategory() {
    const {
      args,
    } = this;

    const {
      learningRequirements,
    } = args;

    const hashOfSelected = this.hashOfSelectedLearningRequirements;

    const requirementsMap = learningRequirements.reduce((memo, learningRequirement) => {
      const { category } = learningRequirement.attributes;

      memo[category] = memo[category] || {
        category,
        learningRequirements: [],
        count: 0,
      };

      memo[category].learningRequirements.push(learningRequirement);

      if (hashOfSelected[learningRequirement.id]) {
        memo[category].count += 1;
      }

      return memo;
    }, {});

    return Object.keys(requirementsMap)
      .sort()
      .map(category => requirementsMap[category]);
  }

  get displayRequirementsByCategory() {
    const {
      requirementsByCategory,
      isEditing,
    } = this;

    if (isEditing) return requirementsByCategory;

    // for view-display, remove nonpopulated categories
    return requirementsByCategory
      .filter(category => category.count > 0);
  }
}
