// why ts?

function sum(num1,num2:number) {
    return num1+num2;
}

let num1 = '10';
let num2 = 20;

let value1 = sum(+num1,+num2);
console.log(value1);

let value2 = sum(+num1,+num2);
console.log(value2);
