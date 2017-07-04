function JasmineDOMMatchers(files) {

  /**
   * @description
   * Add a new array item after the one at the supplied index.
   *
   * @param  {Array}  array
   * @param  {Number} index
   * @param  {*}      item
   */
  function insertAfter(array, index, item) {
    array.splice(index + 1, 0, item);
  }

  /**
   * @description
   * Is this file configuation the the "karma-jasmine" framework's jasmine library?
   *
   * @param  {Object}  file
   * @return {Boolean}
   */
  function isJasmine(file) {
    return file.pattern.search(/karma\-jasmine(\/|\\)lib(\/|\\)adapter\.js/) !== -1;
  }

  /**
   * @description
   * Get the array index of the "karma-jasmine" framework plugin in the files configuration.
   *
   * @param  {Object[]} files
   * @return {Number}
   */
  function indexOfJasmine(files) {
    for (var i = 0, len = files.length; i < len; i++) {
      if (isJasmine(files[ i ])) {
        return i;
      }
    }
    return -1;
  }

  /**
   * @description
   * Locate the Jasmine DOM Matchers library.
   *
   * @return {String}
   */
  function getLibPath() {
    return require.resolve('jasmine_dom_matchers');
  }

  // Init
  // ---------------------------------------------------------------------------------------------

  var ix = indexOfJasmine(files);

  if (ix !== -1) {
    insertAfter(files, ix, {
      pattern: getLibPath(),
      included: true,
      served: true,
      watched: false
    });
  } else {
    throw new Error('"jasmine" needs to appear before "jasmine-dom-matchers" in the "frameworks" array of your Karma configuration.');
  }

}

JasmineDOMMatchers.$inject = [ 'config.files' ];

module.exports = {
  'framework:jasmine-dom-matchers': [ 'factory', JasmineDOMMatchers ]
};
