// 把那些不变的属性和方法，直接定义在prototype对象上

function Cat5(name, color) {
	this.name = name;
	this.color = color;
}

Cat5.prototype.type = "猫科动物";
Cat5.prototype.eat = function() { console.log("eat mouse"); };

var cat1 = new Cat5("bigMao", "black");
var cat2 = new Cat5("smallWhite", "white");

console.log(cat1.eat == cat2.eat);