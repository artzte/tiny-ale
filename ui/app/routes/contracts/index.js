import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import {
  schoolYearTerms,
  sortedCategories,
  sortedPeople,
} from '../../utils/contract-utils';

import {
  STATUS_ACTIVE,
} from '../../utils/user-utils';

export default Route.extend({
  tinyData: service(),

  queryParams: {
    term: {
      refreshModel: true,
    },
    schoolYear: {
      refreshModel: true,
    },
    facilitator: {
      refreshModel: true,
    },
    category: {
      refreshModel: true,
    },
    status: {
      refreshModel: true,
    },
    offset: {
      refreshModel: true,
    },
    limit: {
      refreshModel: true,
    },
  },

  model(params) {
    const { tinyData } = this;
    const {
      schoolYear,
      term,
      facilitator,
      category,
      status,
      offset,
      limit,
    } = params;

    const requestParams = {
      offset,
      limit,
      order: 'name',
      include: 'term,category,facilitator',
    };

    requestParams.schoolYear = schoolYear || tinyData.getSchoolYear();

    if (term) {
      requestParams.termIds = term;
    }

    if (facilitator) {
      requestParams.facilitatorIds = facilitator;
    }

    if (category) {
      requestParams.categoryIds = category;
    }

    if (status) {
      requestParams.status = status;
    }

    this.qp = { ...params, schoolYear: requestParams.schoolYear };

    return tinyData.fetch('/api/contracts', {
      data: requestParams,
    });
  },

  setupController(controller, contracts) {
    const {
      tinyData,
      qp: queryParams,
    } = this;

    const terms = schoolYearTerms(queryParams.schoolYear, tinyData.get('term'));
    const categories = tinyData.get('category');
    const facilitators = tinyData.get('user').filter(user => user.attributes.status === STATUS_ACTIVE && user.attributes.isStaff);

    controller.setProperties({
      categories: sortedCategories(categories),
      facilitators: sortedPeople(facilitators),
      queryParams,
      schoolYears: this.tinyData.getYears().sort((y1, y2) => y2 - y1),
      terms,
      ...queryParams,
    });

    this._super(controller, contracts);
  },
});
