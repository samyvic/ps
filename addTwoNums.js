function addTwoNums(a){
    return (b) =>{
        return a+b;
    }
}

const addNum = addTwoNums(3);
console.log(addNum(2));

