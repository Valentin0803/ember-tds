import Route from '@ember/routing/route';

export default Route.extend({
  actions : {
    save:function(dev){
      dev.save().then(() =>  this.transitionTo('developers'));
    }
  }
});
