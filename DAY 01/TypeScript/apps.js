// why ts?
function sum(num1, num2) {
    return num1 + num2;
}
var num1 = '10';
var num2 = 20;
var value1 = sum(+num1, +num2);
console.log(value1);
var value2 = sum(+num1, +num2);
console.log(value2);
