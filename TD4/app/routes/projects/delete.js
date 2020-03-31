import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    delete:function (project) {
      project.deleteRecord();
      project.save();
      this.transitionTo('projects');
    }
  }
});
