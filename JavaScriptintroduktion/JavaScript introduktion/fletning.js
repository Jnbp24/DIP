let array1 = [1,4,6,8];
let array2 = [2,3,5,7,9];

let mergedArray = [];

let i = 0;
let j = 0;

while (i < array1.length && j < array2.length){
    if(array1[i] < array2[j]){
        mergedArray.push(array1[i]);
        i++;
    }
    else{
        mergedArray.push(array2[j]);
        j++;
    }
}

while (i < array1.length){
    mergedArray.push(array1[i]);
    i++;
}

while (j < array2.length){
    mergedArray.push(array2[j]);
    j++
}

console.log("Flettet array: ", mergedArray)

