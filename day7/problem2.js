/* University Student Management System

Create a class Student having rollNo, name, and marks. 
Initialize these properties using a constructor. 
Create an instance method displayResult() that displays student details 
and determines whether the student has passed. 
Create a static property method to maintain and display the total number of Student objects created. 
Create at least three Student objects and demonstrate all methods.

Concepts Covered: Class, Object, Constructor, Instance Method, Static Method */

class Student {
    static totalStudents = 0;

    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;

        Student.totalStudents++;
    }
    displayResult() {
        console.log("Roll No: " + this.rollNo);
        console.log("Name: " + this.name);
        console.log("Marks: " + this.marks);

        if (this.marks >= 40) {
            console.log("Result: Passed");
        } else {
            console.log("Result: Failed");
        }
        console.log("----------------------");
    }
    static displayTotalStudents() {
        console.log("Total Students: " + Student.totalStudents);
    }
}


let student1 = new Student(101, "Sarthak", 85);
let student2 = new Student(102, "Rahul", 35);
let student3 = new Student(103, "Aman", 72);


student1.displayResult();
student2.displayResult();
student3.displayResult();


Student.displayTotalStudents();