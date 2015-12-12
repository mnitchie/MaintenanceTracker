import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-car-form', 'Integration | Component | create car form', {
  integration: true
});

test('it renders', function(assert) {
  // assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{create-car-form}}`); // jshint ignore:line

  assert.equal(this.$().text().trim(), '');
});
