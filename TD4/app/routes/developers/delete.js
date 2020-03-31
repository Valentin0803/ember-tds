import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model(){
    {
      return EmberObject.create();
    }
  },
  actions:{
    save: function(developer) {
        this.get('store').createRecord('developper', developer).save().then(() => this.transitionTo('developers'));
    }
  }
});
