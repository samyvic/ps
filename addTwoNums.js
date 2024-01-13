function addTwoNums(a){
    return (b) =>{
        return a+b;
    }
}

const addNum = addTwoNums(3);
console.log(addNum(2));

console.log(addNum(10));

// This is the new comment
