import Ember from 'ember';
import SigninUserMixin from '../../../mixins/signin-user';
import { module, test } from 'qunit';

module('Unit | Mixin | signin user');

// Replace this with your real tests.
test('it works', function(assert) {
  let SigninUserObject = Ember.Object.extend(SigninUserMixin);
  let subject = SigninUserObject.create();
  assert.ok(subject);
});
