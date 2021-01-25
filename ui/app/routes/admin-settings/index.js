import Route from '@ember/routing/route';

const settingsRoutes = [{
  route: 'settings-calendar',
  title: 'Calendar settings',
}, {
  route: 'settings-contract-categories',
  title: 'Contract categories',
}, {
  route: 'settings-credits',
  title: 'Credits',
}, {
  route: 'settings-periods',
  title: 'Class periods',
}, {
  route: 'settings-learning-requirements',
  title: 'Learning Requirements (EALRs)',
}, {
  route: 'settings-graduation-plan-requirements',
  title: 'Graduation plan requirements',
}, {
  route: 'settings-learning-plan-goals',
  title: 'Learning plan goals',
}];

const adminRoutes = [{
  route: 'admin-users',
  title: 'Users',
}, {
  title: 'Terms',
  route: 'admin-terms',
}, {
  route: 'admin-credit-batches',
  title: 'Credit batches',
}, {
  route: 'admin-reports',
  title: 'Reports',
}];

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      adminRoutes,
      settingsRoutes,
    });
  },
});
