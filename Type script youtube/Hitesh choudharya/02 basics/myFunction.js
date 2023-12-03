function addTwoValue(num) {
    return num + 2;
}
function addValue(num) {
    return num + 2;
}
var logIn = function (userName, userEmail, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return userName + " " + userEmail + isPaid;
};
var sum1 = addValue(5);
var loginDetails = logIn("Dilshan", "dilshan@gmail.com"); // we can add default value
console.log(loginDetails);
// returning value in functions
function userName(userName) {
    return userName; // we can only return the string values
}
function userPhoneNumber(userPhoneNumber) {
    return userPhoneNumber; // we can only return the number/int/float values
}
var getValue = function (userName, userId, userAge) {
    return userName + userId + userAge;
};
var systemUsers = ["dilshan", "nilusha", "gangamini"];
systemUsers.map(function (systemUsers) {
    return systemUsers;
});
function errGet(error) {
    console.log(error);
}
function errHandle(error) {
    throw new Error("user can not found");
}
var a = null;
// let b :never = 5; can not be assigned any value to the "never type" like string or object or numbers
function functionOne() {
    throw new Error("a");
}
// let c :void = functionOne(); // undefined
var d = functionOne();
var e = functionOne();
var f = functionOne();
var g = functionOne();
// console.log(c);
console.log(d);
