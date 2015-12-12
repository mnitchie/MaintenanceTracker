import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['form-inline'],

	makes: null,
	models: null,

	selectedYear: null,
	selectedMake: null,

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

	needsYear: Ember.computed.empty('selectedYear'),
	needsMake: Ember.computed.empty('selectedMake'),
	needsModel: Ember.computed.empty('selectedModel'),
	canSubmit: Ember.computed.or('needsYear', 'needsMake', 'needsModel'),

	actions: {
		yearSelected(year) {
			this.set('selectedYear', year);
			this.set('isLoading', true);

			this.attrs['yearSelected'](year).then(makes => {
				this.set('makes', makes);
				this.set('isLoading', false);
			});
		},
		makeSelected(make) {
			this.set('selectedMake', make);
			this.set('isLoading', true);

			this.attrs['makeSelected'](this.get('selectedYear'), make).then(models => {
				this.set('models', models);
				this.set('isLoading', false);
			});
		},
		modelSelected(model) {
			this.set('selectedModel', model);
		}
	}
});
