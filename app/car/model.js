import DS from 'ember-data';

export default DS.Model.extend({
	year: DS.attr('string'),
	make: DS.belongsTo('carMake'),
	model: DS.belongsTo('carModel')
});
