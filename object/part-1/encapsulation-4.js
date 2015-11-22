// 构造函数中存在不变的属性会导致内存浪费的问题（比如这里的eat）

function Cat4(name, color) {
	this.name = name;
	this.color = color;
	this.type = "猫科动物";
	this.eat = function() {
		console.log("eat mouse");
	}
}

var cat1 = new Cat4("bigMao", "black");
var cat2 = new Cat4("smallWhite", "white");

console.log("cat1:", cat1);
console.log("cat2:", cat2);

cat1.eat();

console.log(cat1.eat == cat2.eat);