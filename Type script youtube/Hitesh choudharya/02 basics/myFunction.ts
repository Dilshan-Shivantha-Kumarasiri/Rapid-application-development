function addTwoValue(num) {
    return num+2;
}

function addValue(num: number) :number {
    return num+2;
}

let logIn = (userName: string,userEmail :string,isPaid: boolean = true) =>{
    return userName + " " + userEmail + isPaid;
}

let sum1 = addValue(5);

let loginDetails = logIn("Dilshan","dilshan@gmail.com"); // we can add default value
console.log(loginDetails);


// returning value in functions

function userName(userName:string): string{
    return userName; // we can only return the string values
}
function userPhoneNumber(userPhoneNumber:number): number{
    return userPhoneNumber; // we can only return the number/int/float values
}

let getValue = (userName:number , userId:string, userAge:string): string =>{
    return userName+userId+userAge;
}

let systemUsers = ["dilshan","nilusha","gangamini"];

systemUsers.map((systemUsers): string =>{
    return systemUsers;
})

function errGet(error): void {
    console.log(error);
}

function errHandle(error): never {
    throw new Error("user can not found")
}

let a :void = null;
 // let b :never = 5; can not be assigned any value to the "never type" like string or object or numbers
function functionOne():never{
    throw  new Error("a")
}

// let c :void = functionOne(); // undefined
let d :void = functionOne();
let e :number = functionOne();
let f :number = functionOne();
let g :string = functionOne();

function fn(x: string | number) {
    if (typeof x === "string") {
        // do something
    } else if (typeof x === "number") {
        // do something else
    } else {
        x; // has type 'never'! -- this is never observed
        let noTypeForChecked: never = x; // if we added another union it gives and error
    }
}

// console.log(c);
console.log(d);
