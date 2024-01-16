const letters = ['S','@','a','@','m','@','y']

const concateLetters = (prev,next) =>{
    return `${prev}${next}`
}
const filterLetters = (element) => {
    return !element.startsWith('@');
}
console.log(letters.filter(filterLetters).reduce(concateLetters));
