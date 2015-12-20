import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['create-car-form form-inline'],

	makes: null,
	models: null,

	selectedYear: null,
	selectedMake: null,
	selectedModel: null,

	validYears: Ember.computed(function() {
		const years = [],
		      currentYear = new Date().getFullYear();

		for (let i = 1990; i <= currentYear; i++) {
			years.push(Ember.Object.create({
				id: i,
				description: i
			}));
		}

		return years;
	}),

	validMakes: Ember.computed('makes', function() {
		if (this.get('makes')) {
			return this.get('makes').map((make) => {
				return Ember.Object.create({
					id: make.get('id'),
					description: make.get('name')
				});
			});
		} else {
			return null;
		}
	}),

	validModels: Ember.computed('models', function() {
		if (this.get('models')) {
			return this.get('models').map((model) => {
				return Ember.Object.create({
					id: model.get('id'),
					description: model.get('name')
				});
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

			this.attrs['yearSelected'](year.get('id')).then(makes => {
				this.set('makes', makes);

				this.set('selectedMake', null);
				this.set('selectedModel', null);
				this.set('isLoading', false);
			});
		},
		makeSelected(make) {
			this.set('selectedMake', make);
			this.set('isLoading', true);

			this.attrs['makeSelected'](this.get('selectedYear.id'), make.get('id')).then(models => {
				this.set('models', models);

				this.set('selectedModel', null);
				this.set('isLoading', false);
			});
		},
		modelSelected(model) {
			this.set('selectedModel', model);
		},
		saveButtonClicked() {
			this.attrs['saveButtonClicked'](this.get('selectedYear.id'), this.get('selectedMake.id'), this.get('selectedModel.id'));
		}
	}
});
