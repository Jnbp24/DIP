let array = [85, 70, 10, 17, 88, 7, 55, 28, 31, 5, 70, 69, 100, 77, 84, 52, 17, 88, 34, 41];

// max() method
array.max = function() {
    return Math.max(...this);
}

// Acc = accumulator (sum) & Curr = current value
array.sum = function() {
    return this.reduce((acc, curr) => acc + curr, 0);
}

// contains() method
array.contains = function(value) {
    return this.includes(value);
}

console.log("Max:", array.max());            // 100
console.log("Sum:", array.sum());            // 1030
console.log("Contains 55:", array.contains(55));  // true
console.log("Contains 99:", array.contains(99));  // false
