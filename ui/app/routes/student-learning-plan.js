import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class StudentLearningPlanRoute extends Route {
  @service('tinyData') tinyData;

  queryParams = {
    year: {
      refreshModel: true,
    },
  };

  model(params) {
    const { tinyData } = this;
    const student = this.modelFor('student');
    const year = params.year || tinyData.getSchoolYear();
    this.year = year;

    return tinyData.fetch(`/api/learning-plans/${student.data.id}/${year}`)
      .catch(e => {
        if (e.status === 404) {
          return null;
        }
        throw e;
      });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.year = this.year;
    controller.learningPlan = (model && model.data) || this.tinyData.getEmptyRecord('learningPlan');
    controller.student = this.modelFor('student').data;
  }
}
