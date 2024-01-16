const arr = [5,1,3,2,6,10];
const sum = (number, output=0) => {
    return output += number;
}
const max = (number, maximum=0) => {
    return maximum = number > maximum ? number : maximum;
}
const average = () => {
    return arr.reduce(sum)/arr.length;
}
const operation = (logic) =>{
    return arr.reduce(logic);
}
console.log(operation(sum))
console.log(operation(max))
console.log(operation(average))