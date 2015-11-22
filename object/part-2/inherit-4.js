// 利用空对象作为中介

function Animal() {};
Animal.prototype.species = "动物";

// function F() {};

function Cat(name, color) {
	this.name = name;
	this.color = color;
}

var F = function(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;

var cat = new Cat("bigMao", "black");
console.log(cat.species);
console.log(cat.constructor);

// 将以上内容封装为一个函数 extend()
function extend(Child, Parent) {
	var F = function(){};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.uber = Parent.prototype;
}