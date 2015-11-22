// 直接继承prototype

function Animal() {};
Animal.prototype.species = "动物";

function Cat(name, color) {
	this.name = name;
	this.color = color;
}

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat; // 把Animal.prototype对象的constructor属性也改掉了！

var cat = new Cat("bigMao", "black");
console.log(cat.species);
console.log(cat.constructor);

// var animal = new Animal();
// console.log('animal:' + animal.constructor);