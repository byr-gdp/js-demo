var performanceS = function(salary) {
    return salary * 4;
}

var performanceA = function(salary) {
    return salary * 3;
}

var performanceB = function(salary) {
    return salary * 2;
}

var calculateBonus = function(performanceLevel, salary) {
    if(performanceLevel === 'S') {
        return performanceS(salary);
    }
    if(performanceLevel === 'A') {
        return performanceA(salary);
    }
    if(performanceLevel === 'B') {
        return performanceB(salary);
    }
}

console.log(calculateBonus('S', 1000));
console.log(calculateBonus('A', 1000));
console.log(calculateBonus('B', 1000));
