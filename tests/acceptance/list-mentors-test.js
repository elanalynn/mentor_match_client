import { test } from 'qunit';
import moduleForAcceptance from 'mm-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list-mentors');

test('visiting /list-mentors', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/mentors', 'should redirect automatically');
  });
});

test('should redirect to mentors route', function (assert) {

});

test('should list available mentors.', function (assert) {

});

test('should link to information about the mentor.', function (assert) {

});

test('should link to contact information.', function (assert) {

});

test('should filter the list of mentors by city.', function (assert) {

});

test('should show details for a recommended mentor', function (assert) {

});
