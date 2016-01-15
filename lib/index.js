'use strict';

var UnderscoreTemplate = require('./underscore.template');

function Template(text, data, settings) {
  return UnderscoreTemplate(text, data, settings);
}

module.exports = Template;

// If we're in the browser,
// define it if we're using AMD, otherwise leak a global.
if (typeof define === 'function' && define.amd) {
  define(function() {
    return Template;
  });
} else if (typeof window !== 'undefined' || typeof navigator !== 'undefined') {
  window.UnderscoreTemplate = Template;
}