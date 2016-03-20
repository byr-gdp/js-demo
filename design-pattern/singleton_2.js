// 透明单例模式实现
var Singleton = (function() {
  var instance;
  var Singleton = function(name) {
    if(instance) {
      return instance;
    }
    this.name = name;
    return instance = this;
  }

  Singleton.prototype.getName = function() {
    console.log(this.name);
  }

  return Singleton;
})();

var a = new Singleton('sven1');
var b = new Singleton('sven2');

console.log(a === b);
a.getName();
b.getName();