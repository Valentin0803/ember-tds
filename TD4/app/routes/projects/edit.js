import Route from '@ember/routing/route';

export default Route.extend({
  actions : {
    save:function(project){
      project.save().then(() =>  this.transitionTo('projects'));
    }
  }
});
