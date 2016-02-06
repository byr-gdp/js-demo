// 参考 https://toddmotto.com/what-function-window-document-undefined-iife-really-means/
// "what about undefined" 部分
// 因为在 ES3 中 undefined 是可变的。ES5 line 7 会报错在严格模式下

'use strict'
console.log('outer 1:' + undefined);
undefined = 'true';
console.log('outer 2:' + undefined);

(function (window, document, undefined) {
  console.log('inner 1:' + undefined);
})(window, document, undefined);