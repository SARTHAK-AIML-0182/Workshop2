//Call Back Function
function greeUser(name,callback){
    console.log("Hello "+name);
    callback();
}

greeUser("Bob", function(){
    console.log("Callback function executed.");
});

console.log("Start ")
setTimeout(function(){
    console.log("Task Completed")
},2000)

console.log("End")