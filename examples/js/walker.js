/*globals exports:true, window:true */
(function(exports) {
  var hasOwn = Object.prototype.hasOwnProperty
    , isArray = Array.isArray || function (arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
      }
    , objectKeys = Object.keys || function (obj) {
      var keys = [];
      for (var key in obj) if (hasOwn.call(obj, key)) keys.push(key);
      return keys;
    }
    , forEach = function(keys, fn) {
      if (keys.forEach) return keys.forEach(fn);
      for (var i = 0, l = keys.length; i < l; i++) fn.call(keys, keys[i], i, keys);
    };

  exports.walker = function walk(node, fn) {
    if (typeof node !== 'object') return false;
    if (fn(node) === false) return;

    forEach(objectKeys(node), function(key) {
      var child = node[key];
      if (child == null || typeof child !== 'object') return;
      if (typeof child.type === 'string') return walk(child, fn);
      if (isArray(child)) {
        forEach(child, function(sub) {
          walk(sub, fn);
        });
      }
    });
  };
}(typeof exports !== 'undefined' ? exports : window));
