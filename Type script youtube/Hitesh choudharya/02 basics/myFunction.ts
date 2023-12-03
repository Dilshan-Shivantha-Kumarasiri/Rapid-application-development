function addTwoValue(num) {
    return num+2;
}

function addValue(num: number) {
    return num+2;
}

let logIn = (userName: string,userEmail :string,isPaid: boolean = true) =>{
    return userName + " " + userEmail + isPaid;
}

let sum1 = addValue(5);

let loginDetails = logIn("Dilshan","dilshan@gmail.com"); // we can add default value
console.log(loginDetails);