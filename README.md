## eslint-plugin-no-date-constructors

ESLint plugin to disallow problematic date constructors (`new Date()`, `XDate`, `moment()`).



### Usage
In your ESLint configuration (.eslintrc.js):
```
module.exports = {
  plugins: ['no-date-constructors'],
  rules: {
    'no-date-constructors/no-date-constructors': 'error'
  }
};
```

### Rules
no-date-constructors/no-date-constructors: disallows new Date(), XDate and moment() constructors
```