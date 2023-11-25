// function
function findTheSum(sum1, sum2) {
    if (typeof sum1 === 'string' || typeof sum2 === 'string') { // type guard
        return +sum1 + +sum2;
    }
    return sum1 + sum2;
}
console.log(findTheSum('5', 10));
