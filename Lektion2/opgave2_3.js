
// > og < virker åbenbart direkte på strenge. Mega bis
// Can sort alphabetically
function compare(s1, s2) {
    if (s1 < s2) {
        return -1;
    } // s1 is before s2
    if (s1 > s2) {
        return 1;
    } // s1 is after s2
    return 0; // They are the same
}

//Same function as before, but just using the .length property to compare on length
function compareLen(s1, s2) {
    if (s1.length < s2.length) {
        return -1;
    }
    if (s1.length > s2.length) {
        return 1;
    }
    return 0;
}

function compareIgnoreCase(s1, s2) {

    if (s1.toLowerCase() < s2.toLowerCase()) {
        return -1;
    }
    if (s1.toLowerCase() > s2.toLowerCase()) {
        return 1;
    }
    return 0;

}


function bubbleSort() {
    function swap(j) {
        [listStrings[j], listStrings[j + 1]] = [listStrings[j + 1], listStrings[j]];
    }

    let n = listStrings.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compareIgnoreCase(listStrings[j], listStrings[j + 1]) > 0) {
                swap(j);
            }
        }
    }

    return listStrings;
}
