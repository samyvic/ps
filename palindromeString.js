function palindrome(text){
    return text.replaceAll(" ","").split("").reverse().join("");
}
const text = palindrome("Ahmed Samy");
console.log(text);