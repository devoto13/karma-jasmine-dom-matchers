# karma-jasmine-dom-matchers

[Karma](http://karma-runner.github.io/) plugin to inject [Jasmine DOM Matchers](https://github.com/charleshansen/jasmine_dom_matchers) for [Jasmine](http://jasmine.github.io/).

## Installation

    npm install karma-jasmine-dom-matchers
    
## Integration

Just include `'jasmine-dom-matchers'` in the `frameworks` and
`'karma-jasmine-dom-matchers'`in the plugins section of your config

```javascript
module.exports = function(config) {
  config.set({
    frameworks: [
      'jasmine',
      'jasmine-dom-matchers'
    ],
    files: [
      'src/**/*.js',
      'src/**/*.spec.js'
    ],
    // also you must add it as a plugin
    plugins: [
      'karma-jasmine',
      'karma-jasmine-dom-matchers'
    ]
  });
};
```

## Usage

See [jasmine_dom_matchers](https://github.com/charleshansen/jasmine_dom_matchers) for available matchers and usage examples.

## Credits

Plugin implementation is adapted from very similar plugin - [karma-jasmine-matchers](https://github.com/JamieMason/karma-jasmine-matchers) by [Jamie Mason](https://github.com/JamieMason). Licensed under MIT.
