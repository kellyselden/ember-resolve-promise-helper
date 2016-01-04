# ember-resolve-promise-helper

[![Build Status](https://travis-ci.org/kellyselden/ember-resolve-promise-helper.svg)](https://travis-ci.org/kellyselden/ember-resolve-promise-helper)
[![npm version](https://badge.fury.io/js/ember-resolve-promise-helper.svg)](https://badge.fury.io/js/ember-resolve-promise-helper)

Resolve a promise when it is a trailing property

```js
// models/parent.js
export default DS.Model.extend({
  child: DS.belongsTo('child');
});
```

```js
// models/child.js
export default DS.Model.extend({
  name: DS.attr();
});
```

```js
// routes/application.js
export default Ember.Route.extend({
  model() {
    return this.store.findRecord('parent', 1);
  }
});
```

```hbs
{{!-- templates/application.hbs --}}
{{my-component child=(resolve-promise model.child)}}
```

```js
// components/my-component.js
export default Ember.Component.extend({
  // This would not work otherwise
  name: Ember.computed.reads('child.name')
});
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
