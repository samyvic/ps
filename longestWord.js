const wordsArray = ["Hi", "this", "array", "has", "the", "biggest", "word" ];

const checkTheLongestWord = (prev, next) =>{
    return prev.length > next.length ? prev : next;
}
console.log(wordsArray.reduce(checkTheLongestWord));