// 非构造继承 - object 方法

function object(o) {
	function F() {};
	F.prototype = o;
	return F;
}

var Chinese = {
	nation: "中国"
}

var Doctor = object(Chinese);
// 输出 undefined!!!
console.log(Doctor.nation);

Doctor.career = "Doctor";
console.log(Doctor.career);