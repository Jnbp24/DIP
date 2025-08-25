function bubbleSort(array){

    function swap(array,j){
    [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }

    let n = array.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array,j,j+1);
            }
        }
    }
    return array;
}


function binarySearch(arr, element) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = parseInt((left + right) / 2);

        if (arr[mid] === element) {
            return mid; // Found target
        } else if (arr[mid] < element) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; 
}