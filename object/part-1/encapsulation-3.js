// 构造函数模式

function Cat3(name, color) {
	this.name = name;
	this.color = color;
}

var cat1 = new Cat3("bigMao", "white");
var cat2 = new Cat3("smallWhite", "black");

console.log("cat1:", cat1);
console.log("cat2:", cat2);

console.log("cat1.constructor:", cat1.constructor);
console.log("cat2.constructor:", cat2.constructor);

console.log(cat1.constructor == Cat3);
console.log(cat2.constructor == Cat3);