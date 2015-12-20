import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
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
