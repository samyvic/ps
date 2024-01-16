const arr = [1,3,6,2];

const sum = (prev, next) =>{
    return prev + next
}
const maximum = (prev, next) =>{
    return prev > next ? prev : next;
}
const average = (prev, next,index,array) =>{
    return arr.reduce(sum)/array.length;
}
const calculate = (logic) => {
    return arr.reduce(logic);
}

console.log(calculate(sum));
console.log(calculate(maximum));
console.log(calculate(average));