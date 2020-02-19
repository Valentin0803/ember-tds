import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Adapter from 'ember-local-storage/adapters/local';

export default Adapter.extend({
  modelNamespace: 'contact-app'
});

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.ok(adapter);
  });
});
