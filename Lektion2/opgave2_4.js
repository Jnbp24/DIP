let longText = `Once upon a time, in a small village by the sea, 
people lived in harmony with nature. 
Every morning, children ran through the fields laughing, 
while fishermen set out to catch fish under the golden sun.`;

let words = longText.toLowerCase().split(/\W+/).filter(word => word.length >0);

let wordMap = new Map();


for (let word of words){
    if(wordMap.has(word)){
        wordMap.set(word, wordMap.get(word)+1);
    } else {
        wordMap.set(word,1);
    }
}

for (let [word,count] of wordMap){
    console.log(`${word}: ${count}`)
}