function f1() {
	var n = 10;
	var nAdd = function() {n++;}
	
	function f2() {
		console.log(n);
	}
	
	return f2;
}

var result = f1();
result();
nAdd();
result();