var student = /** @class */ (function () {
    function student(name, age) {
        this.name = name;
        this.age = age;
    }
    return student;
}());
var array1 = [1, 2, 3, 4];
var array2 = ["A", "B", "C", "D"];
var array3 = [new student("dilshan", 21),
    new student("shivantha", 23)];
function removeLastItem(array) {
    return array.slice(0, array.length - 1);
}
var number = removeLastItem(array1);
console.log(number);
