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