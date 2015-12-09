import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'select',
	classNames: ['form-control'],

	change: function(event) {
		const value = event.target.value;
		this.attrs['selected'](value);
	},

	default: null, // passed in
	items: null    // passed in
});
