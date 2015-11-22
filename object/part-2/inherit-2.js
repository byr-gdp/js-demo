// 使用prototype属性，"猫"的prototype对象，指向一个Animal的实例

function Animal() {
	this.species = "动物";
}

function Cat(name, color) {
	this.name = name;
	this.color = color;
}

// var animal = new Animal();
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat = new Cat("bigMao", "black");
console.log(cat.species);
console.log(cat.constructor);