// 拷贝继承

function Animal() {};
Animal.prototype.species = "动物";

function extend2(Child, Parent) {
	var p = Parent.prototype;
	var c = Child.prototype;
	
	for(var i in p) {
		c[i] = p[i];
	}
	c.uber = p;
}