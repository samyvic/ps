const arr = [5,1,3,2,6];

function greaterThanFour(number){
    return number > 4;
}
function isEven(number){
    return number % 2 === 0;
}
function divisibleByThree(number){
    return number % 3 === 0;
}

const operation = (logic) =>{
    return arr.filter(logic)
}

console.log(operation(greaterThanFour))
console.log(operation(isEven))
console.log(operation(divisibleByThree))