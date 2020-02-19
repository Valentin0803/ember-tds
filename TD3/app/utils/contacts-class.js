import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({

  datas:computed('datas',function(){
    return this.get('store').findAll('contacts');
  })

});
