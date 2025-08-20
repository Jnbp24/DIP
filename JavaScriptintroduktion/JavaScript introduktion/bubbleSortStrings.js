let listStrings = ["Dragonfruit", "Citrus", "Banana", "Apple", "Orange", "Kiwi"];

for (let i = listStrings.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (listStrings[j] > listStrings[j + 1]) {
            let temp = listStrings[j];
            listStrings[j] = listStrings[j+1];
            listStrings[j+1] = temp;
        }
    }
}

console.log(listStrings);
