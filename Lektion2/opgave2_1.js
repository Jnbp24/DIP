// Bis function
function max(array){
    return Math.max(...array);
}

function contains(array, element){
    return array.includes(element)
}

// Acc = accumulator (sum) & Curr = current value
function sum(array){
    return array.reduce((acc,curr) => acc + curr, 0);
}