function async(arg, callback) {
	console.log("参数为 " + arg + " , 1s后返回结果");
	setTimeout(function() {
		callback(arg * 2);
	}, 1000)
}

function final(value) {
	console.log("完成：", value);
}

var items = [1, 2, 3, 4, 5, 6];
var results = [];

items.forEach(function(item) {
	async(item, function(result) {
		results.push(result);
		if(results.length == items.length) {
			final(results);
		}
	})
})