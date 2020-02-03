import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    save(note){
      model.set("alertVisible", true);
    },
    clear(model){
      model.set("content", '');
    }
  }

});
