// 原始模式的改进
function Cat2(name, color) {
	return {
		name: name,
		color: color
	}
}

var cat1 = Cat2("bigMao", "white");
var cat2 = Cat2("smallWhite", "black");

console.log('cat1:', cat1);
console.log('cat2:', cat2);