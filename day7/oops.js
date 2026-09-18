// without constructor
class A{
    name;
    name="Sarthak";
    show(){
        console.log("Hello, my name is " + this.name);
    }
}
let obj1 = new A();
obj1.show();

// with constructor
class B{
    constructor(name){
        {
            console.log("Hello, my name is " + name);
        }
        let obj = new B("Sarthak");
        obj.show();

        