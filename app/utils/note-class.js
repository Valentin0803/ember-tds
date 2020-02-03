// note-class.js
import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({

  MAX:20,
  content:'Entrez votre texte',
  size: computed('content', function(){
    return this.get('MAX')-this.get('content').length;
  }),
  style: computed('info', function(){
    return " alert-success";
  }),
  alertVisible: computed('info', function(){
    return this.get('content').length!=0;
  })

});
