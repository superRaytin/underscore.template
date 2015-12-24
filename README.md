# underscore.template
> Extracted template from [Underscore](http://underscorejs.org/), use `_.template` without full underscore source.

[![Build Status](https://travis-ci.org/superRaytin/underscore.template.svg?branch=master)](https://travis-ci.org/superRaytin/underscore.template)
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[![underscore.template](https://nodei.co/npm/underscore.template.png)](https://npmjs.org/package/underscore.template)

[npm-url]: https://npmjs.org/package/underscore.template
[downloads-image]: http://img.shields.io/npm/dm/underscore.template.svg
[npm-image]: http://img.shields.io/npm/v/underscore.template.svg

# Installation

```
npm install underscore.template
```

# Quick Start

```js
var UnderscoreTemplate = require('underscore.template');
var template = UnderscoreTemplate("<b><%- value %></b>");

template({value: 'hello world'});
// <b>hello world</b>

template({value: '<script>'});pdat
// <b>&lt;script&gt;</b>
```

# Testing

```
npm test
```

# License

MIT, see the [LICENSE](/LICENSE) file for detail.