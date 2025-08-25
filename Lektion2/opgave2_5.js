let persons = [
    { name: "Alice Johnson", email: "alice@example.com", mobile: "123-456-7890" },
    { name: "Bob Smith", email: "bob@example.com", mobile: "234-567-8901" },
    { name: "Charlie Brown", email: "charlie@example.com", mobile: "345-678-9012" }
];

console.log("Initial persons");
console.log(persons);

//Add new person to array
persons.push({name: "Diana Prince", email: "diana@example.com", mobile: "456-789-0123"});
console.log("Added new person");
console.log(persons);

console.log("\nRead person at index 3:");
console.log(persons[3]); //Charlie Brown

persons[1].email = "bob.smith@newdomain.com";
console.log("Updated Bobs email:");
console.log(persons[1]);


persons.splice(2,1); //Start at index 2, remove 1 element from the list and correctly moves the rest of the list
console.log("\nAfter removing Charlie:")
console.log(persons);