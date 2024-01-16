const arrayOfRadii = [3,1,2,4];

const area = (radius) =>{
    return(Math.PI * radius * radius)
}
const circumference = (radius) =>{
    return(2 * Math.PI * radius)
}
const diameter = (radius) =>{
    return(2 * radius)
}

const calculate = (radius, logic) =>{
    return radius.map(logic);
}

console.log(calculate(arrayOfRadii,area));
console.log(calculate(arrayOfRadii, diameter));
console.log(calculate(arrayOfRadii, circumference));



