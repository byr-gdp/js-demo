// prototype 属性验证方法

// isPrototypeOf()
// 这个方法用来判断，某个proptotype对象和某个实例之间的关系。

function Cat6(name, color) {
	this.name = name;
	this.color = color;
}
Cat6.prototype.type = "猫科动物";

var cat = new Cat6("bigMao", "black");

console.log(Cat6.prototype.isPrototypeOf(cat));

// hasOwnProperty()
// 每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性。

cat.age = 15;
console.log("hasOwnProperty");
console.log(cat.hasOwnProperty("name"));
console.log(cat.hasOwnProperty("type"));
console.log(cat.hasOwnProperty("age"));

// in运算符
// in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。

console.log("in");
console.log("name" in cat);
console.log("type" in cat);