import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class PaginationComponent extends Component {
  @service('router') router;

  get offset() {
    return parseInt(this.args.offset, 10);
  }

  get limit() {
    return parseInt(this.args.limit, 10);
  }

  get totalCount() {
    return parseInt(this.args.totalCount, 10);
  }

  get offsetNext() {
    const {
      offset,
      limit,
    } = this;

    return offset + limit;
  }

  get rangeStart() {
    return this.offset + 1;
  }

  get rangeEnd() {
    return this.offsetNext < this.totalCount ? this.offsetNext : this.totalCount;
  }

  get prevDisabled() {
    return this.offset === 0;
  }

  get nextDisabled() {
    return this.rangeEnd >= this.args.totalCount;
  }

  get hidePrevNextControls() {
    return this.prevDisabled && this.nextDisabled;
  }

  get nextQuery() {
    if (this.nextDisabled) return this.router.currentRoute.query;

    return {
      ...this.router.currentRoute.query,
      offset: this.offsetNext,
      limit: this.args.limit,
    };
  }

  get prevQuery() {
    if (this.prevDisabled) return this.router.currentRoute.query;

    const {
      offset,
      limit,
    } = this;

    return {
      ...this.router.currentRoute.query,
      offset: offset - limit,
      limit,
    };
  }
}
