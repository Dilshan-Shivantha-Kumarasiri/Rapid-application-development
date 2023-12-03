let greeting :string  = "hello dilshan";
//greeting = 5; // can not assign number reason is type is string
//greeting.concat() // only suggest string methods not methods related to any other type
greeting.toLowerCase();

console.log(greeting);



// best practices using the type script
let useAge :number = 55; // Example 05
useAge.toFixed();

// no need to declare annotate number if assign value in the single line
// Type is automatically type inferred to the number in "Example 05" no need to use ":number"

let age; // Example 06
age = 5;
age = "5";

// In the example 06 you can the variable value is not directly assign to the variable in single line
// if we want to add behaviour that variable must need to assign number values we must need to use ":number" annotation
// "age:number = 5 " this is not work. we need to assign in the single variable like "Example 07"

let number : number;
number = 5;
// number = "7"; // can not assign string value


let boolean :boolean = true;
boolean.valueOf();