import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createACar() {
			this.store.findAll('carMake');
		}
	}
});
