const fs=require('fs');
fs.writeFile("std.txt","Name: Sarthak", (err) => {
    if(err){
        console.log("Error in file");
    }
    else{
        console.log("File created successfully");
    }
})

fs.readFile("std.txt", "utf8", (err,data)=>{
    if(err){
        console.log("Error in reading file");
    }
    else{
        console.log("File read successfully");
        console.log(data);
    }
});

fs.appendFile(
    "std.txt",
     "\nAge: 22",
      (err,data) => {
        if(err){
            console.log("Error");
        }
        else{
            console.log("Appended successfully");
        }
        })