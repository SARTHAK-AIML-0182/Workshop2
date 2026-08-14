var student = {
    name: "Sarthak",
    id: 101,
    course:"B-Tech"    
};
console.log("Student Details:", student);
student.age=21;
console.log(student);
delete student.course;
console.log(student);