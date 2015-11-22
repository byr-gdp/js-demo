// 构造函数绑定

function Animal() {
	this.species = "动物";
}

// 猫继承动物
function Cat(name, color) {
	Animal.apply(this, arguments);
	this.name = name;
	this.color = color;
}

var cat = new Cat("bigMao", "black");
console.log(cat.species);