var count = 0;

function interval() {
    var timer = setTimeout(function() {
        console.log(count++);
        interval();
    }, 1000);
}

interval();
