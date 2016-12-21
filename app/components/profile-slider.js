import Ember from 'ember';

export default Ember.Component.extend({
  slider() {
    return new Slider('#time-in-role', {
      formatter: function(value) {
        return 'Current value: ' + value;
      }
    });
  }
});
