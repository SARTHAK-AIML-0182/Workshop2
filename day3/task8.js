const employees = {
    id: 101,
    name: "Sarthak",
    department: "CSE-AIML",
    display: function() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Department:", this.department);
    }
};
employees.display();
