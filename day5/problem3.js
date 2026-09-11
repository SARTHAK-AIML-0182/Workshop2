function college(){
    console.log("Name: "+this.name);
    console.log("Id: "+this.id);
}
deparment={
    name:"aiml",
    id:101,
    college:college
};
classroom={
    name:"section a",
    id:102,
    college:college
};
deparment.college();
classroom.college();