// object with multi functions
let c={
    name:"John",
    age:30,
    job:"Teacher",
    details:function(){
        console.log("My age is "+this.age+" and my name is "+this.name);
        console.log("My job is "+this.job);
    },
    profile:"assistant professor",
    job_title:function(){
        console.log("My job title is "+this.job);
        console.log("My profile is "+this.profile);
    }
}

// -----------------same function with different objeect

function show(){
    console.log("My address is "+this.address);
    console.log("My City is "+this.city);
}
e={
    address:"ABES College",
    city:"Ghaziabad",
    show: show
};
e.show();
f.show();