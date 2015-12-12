import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		yearSelected(year) {
			return this.store.query('carMake', {year: year});
		},
		makeSelected(year, make) {
			return this.store.query('carModel', {
				year: year,
				make: this.store.peekRecord('carMake', make).get('niceName')
			});
		}
	}
});
