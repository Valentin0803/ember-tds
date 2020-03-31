import Route from '@ember/routing/route';
import EmberObject from '@ember/object';


export default Route.extend({
  model() {
    {
      return EmberObject.create();
    }
  },
  actions :{
    save:function(project){
      this.get('store').createRecord('project', project).save().then(() => this.transitionTo('projects'));
    }
  }
});
