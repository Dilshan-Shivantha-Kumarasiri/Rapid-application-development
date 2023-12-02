class student{
    name:string;
    age:number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


let array1 :number[] = [1,2,3,4]
let array2 : string[] = ["A","B","C","D"]
let array3:student[] = [new student("dilshan",21),
                        new student("shivantha",23)];


function removeLastItem<T>(array:T[]) :T[] {
    return array.slice(0,array.length-1);
}

let number = removeLastItem<number>(array1);
console.log(number);