const arr = [5,1,3,2,6];

function double(number){
    return number*2;
}
function triple(number){
    return number*3;
}
function binary(number){
    return number.toString(2);
}

console.log(arr.map(double))
console.log(arr.map(triple))
console.log(arr.map(binary))
