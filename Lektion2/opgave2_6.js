let codeString = "function test() { let arr = [1, 2, 3]; if(arr.length > 0) { return arr[0]; } }";


function checkParenthesisBalance(string){
    let stack = [];
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let char of string){
        // If it's a starting parenthesis, push to stack
        if(char === '(' || char == '{' || char === '['){
            stack.push(char)
        }
        // If it’s a closing parenthesis, check top of stack
        if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0) {
                return false; // nothing to match with
            }

            let top = stack.pop();
            if (top !== pairs[char]) {
                return false; // mismatch
            }
        }
    }

    //If stack is empty, all parentheses matched
    return stack.length === 0;
}
console.log(checkParenthesisBalance(codeString))