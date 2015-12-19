import DS from 'ember-data';
import WebApiSerializer from 'ember-web-api/serializers/web-api';

export default WebApiSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
		make: { embedded: 'always' },
		model: { embedded: 'always' }
	}
});
