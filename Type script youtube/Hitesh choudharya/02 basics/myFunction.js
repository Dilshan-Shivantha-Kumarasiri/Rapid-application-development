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
