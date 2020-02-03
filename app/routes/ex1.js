import Route from '@ember/routing/route';
import Note from 're-td1/utils/note-class';

export default Route.extend({

 model(){
    return Note.create();
  }

});
