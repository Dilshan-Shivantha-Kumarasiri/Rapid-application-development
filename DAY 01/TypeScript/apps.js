//objects
//
// let student:{
//     id:number,
//     name:string,
//     age:number,
//     college:string,
// };
// student = {id:1, name:"dilshan", age:5, college:'uoBolton'}
// // student = {id:1, name:"dilshan", age:5, college:'uoBolton',classs:'se'} // error
// ---------------------------------------distance calculator
function calcDistance(location1, location2) {
    var lon1 = location1.lon;
    var lat1 = location1.lat;
    var lon2 = location2.lon;
    var lat2 = location2.lat;
    // ---- calc distance  ----
    var dLat = lat2 - lat1;
    var dLon = lon2 - lon1;
    var a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // Radius of the Earth in kilometers (mean value)
    var R = 6371;
    // Calculate the distance
    var distance = R * c;
    // ---- calc distance  ----
    return distance;
}
var location_1 = { lon: 80.7718, lat: 7.8731 }; // sri lanka
var location_2 = { lon: 133.7751, lat: 25.2744 }; // ausi
var distance = calcDistance(location_1, location_2);
console.log("Distance: ".concat(distance.toFixed(2), " KM"));
// get location one value
// get location two value
// arrays
var ar = [1, 2.3];
var str = ['dilshan', 'shivantha'];
var strInt = [123, 'dilshan'];
var student1 = { id: 1, name: 'dilshan', age: 20, faculty: 'cse' };
var student2 = { id: 2, name: 'amila', age: 21, faculty: 'Tonic' };
var student3 = { id: 2, name: 'amila', age: 21, faculty: 'Tonic', uni: 'moratuwa' };
var student = [];
student.push(student1);
student.push(student2);
student.push(student3);
var teacher = [];
teacher.push(student1);
var customers = [];
customers.push(student2);
//classes
var person = /** @class */ (function () {
    function person(name, age, nic) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }
    return person;
}());
var person1 = new person('dislhan', 25, 26656);
console.log(person1);
var DbConnection = /** @class */ (function () {
    function DbConnection(connection) {
        DbConnection.connection = connection;
    }
    DbConnection.getConnection = function () {
        if (!this.connection) {
            return new DbConnection('test-connection');
        }
        return DbConnection.connection;
    };
    return DbConnection;
}());
var connection = DbConnection.getConnection();
console.log(connection);
// tuples
var tupel = ['dilshan', 25, 25, 'shivantha', true]; // cannot change order and value count
