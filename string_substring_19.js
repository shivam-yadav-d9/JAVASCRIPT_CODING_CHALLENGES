const substring = (str, substr) => {
    return str.toLowerCase().slice(0, substr.length) === substr.toLowerCase();
}

console.log(substring("Hello World", "hello")); // Output: true
console.log(substring("Hello World", "world")); // Output: false
