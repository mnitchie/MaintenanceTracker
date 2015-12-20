import Ember from 'ember';

export default Ember.Controller.extend({

	newCarName: Ember.computed.oneWay('model.name'),
	newCarVin: Ember.computed.oneWay('model.vin'),

	actions: {
		setCarName(name) {
			this.set('newCarName', name);
		},
		setCarVin(vin) {
			this.set('newCarVin', vin);
		},
		saveChanges() {
			// Do some validation. Only enable the button if values are different from
			// the existing values. Only save if the vin is a valid vin, for example.

			this.set('model.name', this.get('newCarName'));
			this.set('model.vin', this.get('newCarVin'));
			this.get('model').save().then(() => {
				alert('Success!');
			}, () => {
				alert('Fail...');
			});
		},
		deleteCar() {
			const car = this.modelFor('cars.car');
			const confirmed = confirm(`Are you sure? This will permanantly remove this car and all of it's associated data and maintenance history. The operation cannot be undone.`);

			if (confirmed) {
				car.destroyRecord().then(() => {
					this.transitionTo('cars');
				}, () => {
					alert('Error deleting the car. Try again later...');
				});
			}
		}
	}
});
