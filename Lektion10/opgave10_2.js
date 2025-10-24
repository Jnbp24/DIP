class StringStack{
    constructor() {
        this.items = [];
    }


   push(string) {
        if(typeof string !== 'string'){
            throw Error ("Element is not a string")
        };
        this.items.push(string);
    }

    pop() {
        if(this.items.length === 0){
            return ('Stack is empty, cannot pop any more elements'); // Should be an error but cba reading stacktrace
        };
        return this.items.pop();
    }
}

const stack = new StringStack();

stack.push("Hello");
stack.push("World");
stack.push("Friend");

console.log(stack.pop()); //Friend
console.log(stack.pop()); // World
console.log(stack.pop()); // Hello
console.log(stack.pop()); // Empty stack, should throw error