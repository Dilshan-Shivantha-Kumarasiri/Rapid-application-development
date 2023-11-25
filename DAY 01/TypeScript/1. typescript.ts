//  why ts?

// primitive types

function sendSum(num1:number,num2:number,name:string,isWithName:boolean) {
    return  isWithName ? `hi name is ${name}, sum is ${num1+num2}` : `sum is ${num1+num2}`;
}


console.log(sendSum(10,20,'dilshan',true));
console.log(sendSum(10,20,'dilshan',false));

let num1: number = 10;
let num2: number = 10;
let myName: string = 'dilshan';
let withName: boolean = true;


// function

function findSum(num1:number,num2:number):number {
    return num1+num2; // need to return the number if not show some error in source code in type script
}

let result = findSum(10,20);
console.log("function type return value = "+result);
