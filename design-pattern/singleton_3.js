// 代理单例模式

// 普通类
var Singleton = function(name) {
  this.name = name;
}

Singleton.prototype.getName = function() {
  console.log(this.name);
}

// 代理类
var ProxySingleton = (function() {
  var instance;
  
  var ProxySingleton = function(name) {
    if(!instance) {
      instance = new Singleton(name);
    }
    return instance;
  }

  return ProxySingleton;

  // 两种写法
  // return function(name) {
  //   if(!instance) {
  //     instance = new Singleton(name);
  //   }
  //   return instance;
  // }

})();

var a = new ProxySingleton('sven1');
var b = new ProxySingleton('sven2');

console.log(a === b);
a.getName();
b.getName();

var c = new Singleton('sven3');
var d = new Singleton('sven4');

console.log(c === d);
c.getName();
d.getName();