let persons = 
[
    {
        name: "Simon",
        age: 21,
        phoneNumber: '12345678',
    },
    {
        name: "Jonas",
        age: 22,
        phoneNumber: '23456721',
    },
    {
        name: "Alfred",
        age: 32,
        phoneNumber: '65421398',
    },
]

let result = (persons.find(person => person.phoneNumber === '23456721'))
console.log("Phone number: ", result.phoneNumber)


let youngest = (persons.reduce((min, person) => {
    if(person.age < min.age){
        return person;
    }
    return min
}));
console.log("Youngest: ", youngest)


let personsWithId = persons.map((person, index) => {
    return {person, id: index + 1 };
});
console.log("List with ID: ", personsWithId);

let personList = persons.map(person => person.name).sort().join(', ');
console.log("Persons: ", personList);


let youngerThan30 = persons.filter(person => person.age < 30).map(person => ({name: person.name, phoneNumber: person.phoneNumber})) // Extract only name and phonenumber and filter younger than 30
console.log("Younger than 30: ", youngerThan30)