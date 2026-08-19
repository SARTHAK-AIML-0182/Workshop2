console.log("=====String Object=====")
let name = "Sarthak";

console.log("Name:", name);

// string length
console.log("Length of String:", name.length);

// string methods
let str ="welcome to java script";

// string to upper case
console.log("Upper Case:", str.toUpperCase());

// string to lower case
console.log("Lower Case:", str.toLowerCase());

//string charAt()
console.log("Char at 5:", str.charAt(5));

//string indexOf()
console.log("Index of 'to':", str.indexOf("to"));

//last index of
console.log("Last Index of 'java':", str.lastIndexOf("java"));

//slice()
console.log("Slice:", str.slice(0, 7));

//split()
let data= "HTML,CSS,JS,REACT";
let result = data.split(",");

console.log("Split:", result);

//replace()
let text = "I love java ";

console.log("Replace:", text.replace("java", "JS"));

//concat()
let str1 = "Sarthak ";
let str2 = "Mishra";

console.log("Concat:", str1.concat(str2));

//includes
console.log("\n=== Includes Method ===");
let course = "I love JavaScript";

console.log("Includes 'love':", course.includes("love"));
console.log("Includes 'Python':", course.includes("Python"));

//array of object
console.log("\n=== Array of Object ===");
let numbers = [10, 20, 30, 40, 50];

console.log("Numbers:", numbers);

//accessing array elements
console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[numbers.length - 1]);

//array methods
console.log("\n=== Array Methods ===");

//pushing new element to array
numbers.push(60);

console.log("After Push:", numbers);

//popping last element from array
numbers.pop();

console.log("After Pop:", numbers);

//unshift() - adding element at the beginning
numbers.unshift(5);

console.log("After Unshift:", numbers);

//shift() - removing first element from array
numbers.shift();

console.log("After Shift:", numbers);

//date object
console.log("\n=== Date Object ===");
let date = new Date();

console.log(" Date:", date);

// get full year
console.log("Full Year:", date.getFullYear());

// get month
console.log("Month:", date.getMonth() + 1);

// get date
console.log("Date:", date.getDate());

// get day
console.log("Day:", date.getDay());

// get hours
console.log("Hours:", date.getHours());

// get minutes
console.log("Minutes:", date.getMinutes());

//get seconds
console.log("Seconds:", date.getSeconds());

//get milliseconds
console.log("Milliseconds:", date.getMilliseconds());

//get time
console.log("Time:", date.getTime());


//math object
console.log("\n=== Math Object ===");

//value of PI
console.log("PI:", Math.PI);

//maximum value
console.log("Maximum:", Math.max(5, 10, 20, 15));

//minimum value
console.log("Minimum:", Math.min(5, 10, 20, 15));

//round
console.log("Round of 4.5:", Math.round(4.5));

//floor
console.log("Floor of 4.7:", Math.floor(4.7));

//ceil
console.log("Ceil of 4.3:", Math.ceil(4.3));

//random number
console.log("Random Number:", Math.random());

//square root
console.log("Square Root of 25:", Math.sqrt(25));

//power
console.log("2 raised to the power 3:", Math.pow(2, 3));

//largest integer
console.log("Largest Integer:", Number.MAX_SAFE_INTEGER);


