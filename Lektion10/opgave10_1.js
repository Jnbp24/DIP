class Person {
    constructor(navn) {
        this.navn = navn;
    }
    toString() { return this.navn; }

    static equals(person) {
        return person instanceof Person && person.navn === this.navn;
    }

    static compare(p1,p2) {
        if (p1.navn < p2.navn) {
            return -1;
        } // s1 is before s2
        if (p1.navn > p2.navn) {
            return 1;
        } // s1 is after s2
        return p1.navn.localeCompare(p2.navn); // They are the same
    }
}
class Studerende extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }
    
    toString() { return super.toString() + ": " + this.id; };

    static equals(person){
        return super.equals(person) && person instanceof Studerende && this.id == person.id
    }

    static compare(p1,p2){
        return Person.compare(p1.navn,p2.navn)
    }
}

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

let kat = new Kat('Garfield');

let person = new Person("Viggo");
let studerende = new Studerende("Ida", 123);
console.log(person instanceof Person); // => true
console.log(person instanceof Studerende); // => false
console.log(studerende instanceof Person); // => true
console.log(studerende instanceof Studerende); // => true



let peopleArray = [
    new Person("Viggo",6543),
    new Studerende("Ida", 123),
    new Person("Brian"),
    new Studerende("Alice", 456),
    new Studerende("Charlie", 789),
    new Kat ('Misse')
];

peopleArray.sort((a,b) => Person.compare(a,b));
peopleArray.forEach(p => console.log(p.toString()));
