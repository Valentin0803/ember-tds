import DS from 'ember-data';
const { Model } = DS;

export default DS.Model.extend({
  Nom: DS.attr('string'),
  Prenom: DS.attr('string'),
  Email: DS.attr('string')
});
