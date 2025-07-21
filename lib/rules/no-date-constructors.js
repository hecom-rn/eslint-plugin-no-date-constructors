'use strict';

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow the use of problematic date constructors (Date, XDate, moment)',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/hecom-rn/eslint-plugin-no-date-constructors'
    },
    fixable: null,
    schema: [],
    messages: {
      noDateConstructor: 'Avoid using "{{constructor}}", use a safer date utility instead.'
    }
  },

  create(context) {
    return {
      NewExpression(node) {
        if (node.callee.name === 'Date' || node.callee.name === 'XDate') {
          context.report({
            node,
            messageId: 'noDateConstructor',
            data: {
              constructor: node.callee.name
            }
          });
        }
      },
      CallExpression(node) {
        if (
          node.callee.type === 'Identifier' &&
          node.callee.name === 'moment'
        ) {
          context.report({
            node,
            messageId: 'noDateConstructor',
            data: {
              constructor: 'moment'
            }
          });
        }
      }
    };
  }
};