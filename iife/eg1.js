(function (window, document, undefined) {
  // var gdp = function () {
  //   return gdp.get.apply(gdp, arguments);
  // }
  var gdp = {};

  gdp.set = function (key, value) {
    this[key] = value;
    return this;
  }

  gdp.get = function (key) {
    return gdp[key];
  }

  if (typeof define === 'function' && define.amd) {
    define(function() {
      return gdp;
    });
  } else if (typeof exports !== 'undefined') {
    exports.gdp = gdp;
  } else {
    window.gdp = gdp;
  }

})(window, document)