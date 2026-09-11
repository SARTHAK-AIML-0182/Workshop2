function sum(...nums) {
    let sum = 0;

    for (let n of nums) {
        sum = sum + n;
    }

    return sum;
}

console.log(sum(10, 20, 30, 40));


// example 2
function fix(name, ...collection) {
    let total = 0;

    for (let n of collection) {
        total += n;
    }

    console.log("Hello " + name);
    console.log("Total = " + total);
}

fix("Sarthak", 10, 20, 30, 40);


// Create a Rest Operator function that take input from user and Provide the Sum of that numbers.
function sum(...numbers) {
    let total = 0;

    for (let n of numbers) {
        total += Number(n);
    }

    return total;
}

let input = prompt("Enter numbers separated by commas:");
let numbers = input.split(",");

console.log("Sum =", sum(...numbers));