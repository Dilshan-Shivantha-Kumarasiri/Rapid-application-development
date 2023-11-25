//  why ts?

// -----------------------------------primitive types-----------------------------------------

function sendSum(num1:number,num2:number,name:string,isWithName:boolean) {
    return  isWithName ? `hi name is ${name}, sum is ${num1+num2}` : `sum is ${num1+num2}`;
}


console.log(sendSum(10,20,'dilshan',true));
console.log(sendSum(10,20,'dilshan',false));

let num1: number = 10;
let num2: number = 10;
let myName: string = 'dilshan';
let withName: boolean = true;


// ----------------------------------------function------------------------------------------------

function findSum(num1:number,num2:number):number {
    return num1+num2; // need to return the number if not show some error in source code in type script
}

let result = findSum(10,20);
console.log("function type return value = "+result);


// -------------------------------------------type guard-------------------------------------------
function findTheSum(sum1:string | number,sum2:string | number) :number {
    if (typeof sum1 === 'string' || typeof sum2 === 'string'){ // type guard
        return +sum1+ +sum2;
    }
    return sum1+sum2;
}

console.log(findTheSum('5',10))

function findTheSum2(sum1:string | number,sum2:string | number) :number | string {
    if (typeof sum1 === 'string' || typeof sum2 === 'string'){ // type guard
        return +sum1+ +sum2;
    }
    return sum1+sum2; // looking for this
}

console.log(findTheSum2('5',10));

// objects

let student:{
    id:number,
    name:string,
    age:number,
    college:string,
};

student = {id:1, name:"dilshan", age:5, college:'uoBolton'}
// student = {id:1, name:"dilshan", age:5, college:'uoBolton',classs:'se'} // error


// ------------------------------------------arrays-------------------------------------------

let ar:number[] = [1,2.3];
let str : string[] = ['dilshan','shivantha'];
let strInt :(string | number)[]  = [123 , 'dilshan'];

let student1 = {id:1,name:'dilshan',age:20,faculty:'cse'}
let student2 = {id:2,name:'amila',age:21,faculty:'Tonic'}

let student3 = {id:2,name:'amila',age:21,faculty:'Tonic',uni:'moratuwa'}

let students:{id:number,name:string,age:number,faculty:string,uni?:string}[] = [];
students.push(student1);
students.push(student2);
students.push(student3);


// --------------------------------------------Type-----------------------------------------------
type graduate = {id:number,name:string,age:number,faculty:string,uni?:string};

let teacher:graduate[] = [];
teacher.push(student1);


// ----------------------------customer types using interface--------------------------------------
interface graduate2 {
    id:number,
    name:string,
    age:number,
    faculty:string,
    uni?:string
}

let customers:graduate2[] = [];
customers.push(student2);







