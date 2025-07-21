'use strict';

module.exports = {
  rules: {
    'no-date-constructors': require('./rules/no-date-constructors')
  },
  configs: {
    recommended: {
      plugins: ['no-date-constructors'],
      rules: {
        'no-date-constructors/no-date-constructors': 'error'
      }
    }
  }
};