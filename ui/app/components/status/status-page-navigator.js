import Component from '@glimmer/component';

export default class StatusPageNavigatorComponent extends Component {
  get previousParticipant() {
    const { current, navigationList } = this.args;
    const { id } = current;
    const indexOfCurrent = navigationList.findIndex(participant => participant.value === id);
    const indexOfPrevious = indexOfCurrent === 0 ? null : indexOfCurrent - 1;

    if (indexOfPrevious === null) return null;

    return navigationList[indexOfPrevious];
  }

  get noPreviousParticipant() {
    return Boolean(!this.previousParticipant);
  }

  get nextParticipant() {
    const { current, navigationList } = this.args;
    const { id } = current;
    const indexOfCurrent = navigationList.findIndex(participant => participant.value === id);
    const indexOfNext = indexOfCurrent === (navigationList.length - 1) ? null : indexOfCurrent + 1;

    if (indexOfNext === null) return null;

    return navigationList[indexOfNext];
  }

  get noNextParticipant() {
    return Boolean(!this.nextParticipant);
  }
}
