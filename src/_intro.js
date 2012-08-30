// AMD & CommonJS compliance.
(function (name, definition) {

  'use strict';

  var exported = definition();

  // AMD
  if (typeof define === 'function' && define.amd) {
    define(name, exported);
  // CommonJS
  } else if (typeof exports !== 'undefined') {
    exports[name] = exported;
  // Attach to global, ie. window for browsers.
  } else {
    this[name] = exported;
  }
}('luaparse', function () {

  'use strict';
