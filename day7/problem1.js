// create a class sec A and display the data(Name,ROLL-No,ADDRESS,MOBILE-NO) of 5 student using constructor
class Student {
    constructor(name, rollNo, address, mobileNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.address = address;
        this.mobileNo = mobileNo;
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollNo);
        console.log("Address: " + this.address);
        console.log("Mobile No: " + this.mobileNo);
    }
}
let student1 = new Student("Sarthak", 1, "Ghaziabad", "8960037827");
let student2 = new Student("Shivam", 2, "Delhi", "987-654-3210");
let student3 = new Student("Kitty", 3, "Mumbai", "555-555-5555");
let student4 = new Student("Puppy", 4, "Chennai", "111-222-3333");
let student5 = new Student("Buddy", 5, "Bangalore", "444-444-4444");

// ends


//static property and method
class Hello3{
    static name="Example of static variable and method";
    static show(){
        console.log("Hello class this is "+Hello3.name);
    }
}
Hello3.show();

//static method with static variable
class Hello4{
    static name="Example of static method without static variable";
    static show(){
        console.log("Hello class this is "+Hello4.name);
    }
}
Hello4.show();

//static member with instance member
class Hello5{
    static name="Example of static method with instance varible";;
    constructor(){
        this.instanceVar="Instance variable";
    }
    show(){
        console.log("Static variable: "+Hello5.name);
        console.log("Instance variable: "+this.instanceVar);
    }
}
let h5=new Hello5();
h5.show(); 

// static method with instance method without constructor
class Student {
    static name = "Example of static method";

    static show() {
        console.log("Static variable: " + Student.name);
    }

    display() {
        console.log("This is an instance method");
    }
}

Student.show();

let s1 = new Student();
s1.display();

