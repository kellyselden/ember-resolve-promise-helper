import Ember from 'ember';

const {
  Helper,
  get,
  set
} = Ember;

export default Helper.extend({
  isResolved: false,
  value: null,

  compute([promise]) {
    if (!get(this, 'isResolved')) {
      promise.then(value => {
        this.toggleProperty('isResolved');
        set(this, 'value', value);
        this.recompute();
      });
    }

    return get(this, 'value');
  }
});
