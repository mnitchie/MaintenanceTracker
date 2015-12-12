import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['form-inline'],

	makes: null,
	models: null,

	validYears: Ember.computed(function() {
		const years = [],
		      currentYear = new Date().getFullYear();

		for (let i = 1990; i <= currentYear; i++) {
			years.push({
				id: i,
				description: i
			});
		}

		return years;
	}),

	validMakes: Ember.computed('makes', function() {
		if (this.get('makes')) {
			return this.get('makes').map((make) => {
				return {
					id: make.get('id'),
					description: make.get('name')
				};
			});
		} else {
			return null;
		}
	}),

	validModels: Ember.computed('models', function() {
		if (this.get('models')) {
			return this.get('models').map((model) => {
				return {
					id: model.get('id'),
					description: model.get('name')
				};
			});
		} else {
			return null;
		}
	}),

	actions: {
		yearSelected(year) {
			this.set('isLoading', true);

			this.attrs['yearSelected'](year).then(makes => {
				this.set('makes', makes);
				this.set('isLoading', false);
			});
		},
		makeSelected(make) {
			this.set('isLoading', true);

			this.attrs['makeSelected'](make).then(models => {
				this.set('models', models);
				this.set('isLoading', false);
			});
		},
		modelSelected(model) {
			alert(model);
		}
	}
});
