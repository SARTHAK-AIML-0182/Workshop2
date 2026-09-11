let a={
    name:"John",
    marks:85,
    addmarks:function(marks){
        this.marks+=marks;
        console.log("New Marks: "+this.marks);
    },
    display:function(){
        console.log("Name: "+this.name);
        console.log("Marks: "+this.marks);
    }
}
a.display();
a.addmarks(10);
a.display();