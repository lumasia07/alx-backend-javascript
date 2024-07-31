import createEmployee from main.ts;

const employee1 = createEmployee(400);
console.log(employee1); // Should return a Teacher instance
console.log(employee1.workFromHome()); // Should return "Cannot work from home"

const employee2 = createEmployee(1000);
console.log(employee2); // Should return a Director instance
console.log(employee2.getCoffeeBreak()); // Should return "Getting a coffee break"

const employee3 = createEmployee("450");
console.log(employee3); // Should return a Teacher instance
console.log(employee3.workTeacherTasks()); 