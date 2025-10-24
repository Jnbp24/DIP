// Opgave 9_3
function compareSort(compare) {
    return function (array) {
        if (typeof compare != 'function') throw Error ('Not a function')
            if (compare.length !== 2) throw Error ('Function does not have exactly two parameters')
        if (!Array.isArray(array)) {
            throw new Erro("Expected an array to sort")
        }
        return array.sort(compare);
    }
}

function compare(s1, s2) {
    if (typeof s1 !== "string" || typeof s2 !== "string") {
        throw new TypeError("Compare function expects string arguments")
    }
    if (s1 < s2) {
        return -1;
    } // s1 is before s2
    if (s1 > s2) {
        return 1;
    } // s1 is after s2
    return 0; // They are the same
}


function compareLen(s1, s2) {
    if (typeof s1 !== "string" || typeof s2 !== "string") {
        throw new TypeError("compareLen function expects string arguments");
    }

    if (s1.length < s2.length) {
        return -1;
    }
    if (s1.length > s2.length) {
        return 1;
    }
    return 0;
}

function compareIgnoreCase(s1, s2) {
    s1 = String(s1).toLowerCase();
    s2 = String(s2).toLowerCase();
    if (s1 < s2) return -1;
    if (s1 > s2) return 1;
    return 0;
}



let strings = ["Pomegranate", "banana", "Apple", "Orange"]

let sortAlphabetical = compareSort(compare); 
console.log("Sorted alphabetically: ", sortAlphabetical(strings))

let sortByLength = compareSort(compareLen)
console.log("Sorted by length: ", sortByLength(strings))

let ignoreCaseSort = compareSort(compareIgnoreCase);
console.log("Ignore case sort: ", ignoreCaseSort(strings))