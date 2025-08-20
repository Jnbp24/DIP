
// Bubble Sort function for numbers
function bubbleSortNumbers(arr) {
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Binary Search function for numbers
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found target
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Not found
}

// Example list of numbers
let numbers = [42, 7, 19, 3, 25, 10];
console.log("Original list:", numbers);

// Sort the list
bubbleSortNumbers(numbers);
console.log("Sorted list:", numbers);

// Test binary search with different numbers
let testNumbers = [19, 5, 42, 100, 3];

testNumbers.forEach((num) => {
    let position = binarySearch(numbers, num);
    console.log(`Position of ${num}:`, position);
});