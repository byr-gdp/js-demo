// 模拟传统面向对象编程语言的策略模式
// 策略类和 Bonus 类除了使用函数声明形式外，还可以使用函数赋值的形式。
// 如 var performanceS = function(){};
function performanceS() {};
performanceS.prototype.calculate = function(salary) {
    return salary * 4;
}

function performanceA() {};
performanceA.prototype.calculate = function(salary) {
    return salary * 3;
}

function performanceB() {};
performanceB.prototype.calculate = function(salary) {
    return salary * 2;
}

function Bonus() {
    this.salary = null;
    this.strategy = null;
}
Bonus.prototype.setSalary = function(salary) {
    this.salary = salary;
}
Bonus.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
}
Bonus.prototype.getBonus = function() {
    return this.strategy.calculate(this.salary);
}

// test

var bonus = new Bonus();
bonus.setSalary(1000);
// 策略类必须实例化
bonus.setStrategy(new performanceS());
console.log(bonus.getBonus());
