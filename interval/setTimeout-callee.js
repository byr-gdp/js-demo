var count = 0;

var timer = setTimeout(function() {
    console.log(count++);
    timer = setTimeout(arguments.callee, 1000);
}, 1000);
