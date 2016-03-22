// 使用高阶函数

var s = function(salary) {
    return salary * 4;
}

var a = function(salary) {
    return salary * 3;
}

var b = function(salary) {
    return salary * 2;
}

var calculateBonus = function(func, salary) {
    return func(salary);
}

// test

console.log(calculateBonus(s, 1000));
console.log(calculateBonus(a, 1000));
console.log(calculateBonus(b, 1000));
