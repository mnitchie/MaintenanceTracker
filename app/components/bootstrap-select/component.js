import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'select',
	classNames: ['form-control'],

	change: function(event) {
		this.attrs['changed'](Ember.Object.create({
			id: event.target.value,
			description: event.target.selectedOptions[0].text
		}));
	},

	default: null,  // passed in
	items: null,    // passed in
	selected: null, // passed in

	selectFirstOption: Ember.observer('selected', function() {
		if (Ember.isEmpty(this.get('selected'))) {
			this.$().val(this.get('default'));
		}
	})
});
