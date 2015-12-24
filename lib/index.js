'use strict';

var UnderscoreTemplate = require('./underscore.template');

function Template(text, data, settings) {
  return UnderscoreTemplate(text, data, settings);
}

module.exports = Template;