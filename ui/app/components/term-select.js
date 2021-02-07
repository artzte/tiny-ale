import TSelect from './t-select';

export default class TermSelect extends TSelect {
  constructor(...args) {
    super(...args);

    this.args = {
      ...this.args,
      optionsList: this.termsOptions,
    };
  }

  get termsOptions() {
    return this.args.terms
      .sort((t1, t2) => {
        const year = t2.attributes.schoolYear - t1.attributes.schoolYear;
        if (year) {
          return year;
        }
        return t1.attributes.name.localeCompare(t2.attributes.name);
      })
      .map(term => ({
        name: term.attributes.name,
        value: term.id,
      }));
  }
}
