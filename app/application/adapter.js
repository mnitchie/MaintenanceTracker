import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://10.211.55.5:50000',
	namespace: 'api'
});
