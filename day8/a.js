// //Inheritance
// class Employee{
//     constructor(id,name,basicSalary){
//         this.name=name;
//         this.id=id;
//         this.basicSalary=basicSalary;
//     }
//     calculateSalary(){
//         return this.basicSalary;
//     }
// }
// // derived class
// class Manager extends Employee{
//     constructor(id,name,basicSalary,incentive){
//         super(id,name,basicSalary);
//         this.incentive=incentive;
//     }
//     // overriding method
//     calculateSalary(){
//         return this.basicSalary+this.incentive;
//     }
// }

// let emp1=new Employee(101,"Sarthak",50000);
// console.log("Employee Salary: " + emp1.calculateSalary());
// let emp2=new Employee(102,"Shivam",60000);
// console.log("Employee Salary: " + emp2.calculateSalary());

// let manager1=new Manager(102,"Shivam",60000,10000);
// console.log("Manager Salary: " + manager1.calculateSalary());
// let manager2=new Manager(103,"Kitty",70000,15000);
// console.log("Manager Salary: " + manager2.calculateSalary());

// //Synchronus

// console.log(10)
// console.log(20)
// console.log(40)
// console.log(50)

// //Async

// console.log("Start");

// setTimeout(function(){
//     console.log("Middle");
// }, 2000);
// console.log("End");


//other Example

// function printName(){
//     console.log("Sarthak");
// }
// printName();
// console.log("Welcome");

// function printName(){
//     setTimeout(()=>{
//         console.log("Sarthak");
//     },2000);
// }
// printName();

// console.log("Welcome");


// Promise Example
let complet=true;
let prom=new Promise(function(resolve,reject){
    if(complet){
        resolve("I am true");
    } else {
        reject("I am false");
    }
});
console.log(prom);