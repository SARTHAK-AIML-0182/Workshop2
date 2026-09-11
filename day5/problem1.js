let employee={
    name:"John",
    salary:50000,
    display:function(){
        console.log("Name: "+this.name);
        console.log("Salary: "+this.salary);
    },
    increaseSalary:function(amount){
        this.salary+=amount;
        console.log("New Salary: "+this.salary);
    }
}
employee.display();
employee.increaseSalary(5000);
employee.display();