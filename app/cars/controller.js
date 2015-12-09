import Ember from 'ember';

export default Ember.Controller.extend({
	selectedYear: null,
	selectedMake: null,

	makes: null,
	models: null,

	actions: {
		yearSelected(year) {
			this.set('selectedYear', year);

			this.store.query('carMake', {year: year}).then((makes) => {
				this.set('makes', makes);
			});
		},
		makeSelected(make) {
			this.set('selectedMake', make);

			this.store.query('carModel', {
				year: this.get('selectedYear'),
				make: this.store.peekRecord('carMake', make).get('niceName')
			}).then((models) => {
				this.set('models', models);
			});
		}
	}
});
