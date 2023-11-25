// function

function findTheSum(sum1:string | number,sum2:string | number) :number {
    if (typeof sum1 === 'string' || typeof sum2 === 'string'){ // type guard
        return +sum1+ +sum2;
    }
    return sum1+sum2;
}

console.log(findTheSum('5',10))