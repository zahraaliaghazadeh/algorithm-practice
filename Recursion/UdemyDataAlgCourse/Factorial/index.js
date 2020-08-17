/*
    Write a function factorial which accepts a number and returns the factorial of that number.
    A factorial is the product of an integer and all the integers below it;
    eg factorial (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.
*/

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    
    return n * factorial(n - 1);
}

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040
