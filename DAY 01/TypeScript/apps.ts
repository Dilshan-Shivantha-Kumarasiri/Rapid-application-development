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


function calcDistance(location1: {lon: number; lat: number}, location2: {lon: number; lat: number}) {

    let lon1 = location1.lon;
    let lat1 = location1.lat;

    let lon2 = location2.lon;
    let lat2 = location2.lat;


    // ---- calc distance  ----
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Radius of the Earth in kilometers (mean value)
    const R = 6371;

    // Calculate the distance
    let distance = R * c;
// ---- calc distance  ----

    return distance;

}

let location_1 = { lon: 80.7718, lat: 7.8731 }; // sri lanka
let location_2 = { lon: 133.7751, lat: 25.2744 }; // ausi

let distance = calcDistance(location_1, location_2);
console.log(`Distance: ${distance.toFixed(2)} KM`);


// get location one value


// get location two value

// arrays

let ar:number[] = [1,2.3];
let str : string[] = ['dilshan','shivantha'];
let strInt :(string | number)[]  = [123 , 'dilshan'];

let student1 = {id:1,name:'dilshan',age:20,faculty:'cse'}
let student2 = {id:2,name:'amila',age:21,faculty:'Tonic'}

let student3 = {id:2,name:'amila',age:21,faculty:'Tonic',uni:'moratuwa'}

let student:{id:number,name:string,age:number,faculty:string,uni?:string}[] = [];
student.push(student1);
student.push(student2);
student.push(student3);


type graduate = {id:number,name:string,age:number,faculty:string,uni?:string};

let teacher:graduate[] = [];
teacher.push(student1);

interface graduate2 {
    id:number,
    name:string,
    age:number,
    faculty:string,
    uni?:string
}

let customers:graduate2[] = [];
customers.push(student2);