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



// -------------------------------class--------------------------------------
class person{

    name:string;
    age:number;
    nic:number


    constructor(name: string, age: number, nic: number) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }
}
let person1 = new person('dislhan',25,26656);
console.log(person1);
person1.nic = 2546546;
console.log(person1);


// -------------------------------readonly--------------------------------------

class persons{

    public name:string;
    private age:number;
    readonly nic:number


    constructor(name: string, age: number, nic: number) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }

    getAge(){
        return this.age;
    }
}
let persons1 = new persons('dislhan',25,26656);
console.log(person1)
//persons1.nic = 2546546;// can not update value because this is read only
console.log(persons1);

// -------------------------------private--------------------------------------

//console.log(persons1.age) // can not access because properties are private (need to implement method)
console.log(persons1.getAge())



// -------------------------------singleton pattern--------------------------------------


class DbConnection{
    static connection:string


    private constructor(connection: string) {
        DbConnection.connection = connection;
    }

    static getConnection(){
        if (!this.connection){
            return new DbConnection('test-connection');
        }
        return DbConnection.connection;
    }
}

let connection = DbConnection.getConnection();
console.log(connection);

// -------------------------------Tuples--------------------------------------

let tupel:[string,number,number,string,boolean] =  ['dilshan',25,25,'shivantha',true] // cannot change order and value count


// ------------------------------- union --------------------------------------

let array :(number |string|boolean)[] = ["1" , 2 , true]

class Student {
    id: number;
    name: string;
    college: string;
    faculty: string;
}

class Teacher {
    id: number;
    name: string;
    subject: string;
    college: string;
}

class Soldier {
    id: number;
    name: string;
    post: string;
}

let people: (Student | Teacher | Soldier)[] = [];


// ------------------------------- enums--------------------------------------
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    MANAGER,
    SELLER
}


