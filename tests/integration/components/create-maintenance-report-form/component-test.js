import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-maintenance-report-form', 'Integration | Component | create maintenance report form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{create-maintenance-report-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#create-maintenance-report-form}}
      template block text
    {{/create-maintenance-report-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
