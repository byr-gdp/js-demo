function release(arr) {
    var tmp = arr;
    var result = arr;
    while(tmp instanceof Array) {
        result = Array.prototype.concat.apply([], result);
        tmp = tmp[0];
    }
    return result;
}

var d1 = [1, 2, 3, 4];

console.log('result of d1:');
console.log(release(d1));

var d2 = [[1, 2], [3, 4]];

console.log('result of d2:');
console.log(release(d2));

var d3 = [[[1, 2], [3, 4]], [[4, 3], [2, 1]]];

console.log('result of d3:');
console.log(release(d3));
