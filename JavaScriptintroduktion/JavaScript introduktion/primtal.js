
function isPrimeNumber(n){
    if(n < 2) return false;
    for (let i = 2; i * i <= n; i++){
        if(n % i === 0) return false; //If n is not equal to 0, it is not a prime number
    }
    return true;
}


const maxNumber = 50;

console.log(`Prime numbers up to ${maxNumber}`);
for (let number = 2; number <= maxNumber; number++){
    if(isPrimeNumber(number)) console.log(number);
}
