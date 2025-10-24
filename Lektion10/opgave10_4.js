class Person{
    constructor(name){
      this.name = name;
      this.groups = new Set(); // groups the person is a part of
    }

    addToGroup(group){
        if (!this.groups.has(group)){
            this.groups.add(group); // Add the group to the groups list
            group.addPerson(this); // Add the person to the group
        }
    }

    removeFromGroup(group){
        if(this.groups.has(group)){
            this.groups.delete(group); // Remove the group from the groups list
            group.removePerson(this); // Remove the person from the group
        }
    }

    toString() {
        return this.name;
    }

}

class Group {
    constructor(name){
        this.name = name;
        this.members = new Set(); // Persons in this group
    }

    addPerson(person){
        if(!this.members.has(person)){
            this.members.add(person); // Add the person to the members list
            person.addToGroup(this); // Add the person to the groups list
        }
    }

    removePerson(person){
        if(this.members.has(person)){
            this.members.delete(person); // Remove the person from the members list
            person.removeFromGroup(this); // Remove the person from the groups list
        }
    }

    toString(){
        return this.name;
    }

}