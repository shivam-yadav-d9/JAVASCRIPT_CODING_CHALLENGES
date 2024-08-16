// const vowelString = (str)=>{
//      let vowel = ['a','e','i','o','u']
//      let count = 0;
//       str =str.toLowerCase();
//      for(let i=0; i<str.length;i++){
//         if(vowel.indexOf(str[i])){
//             count++;
//         }
//      }
//      return count;
// }

// console.log(vowelString("I am shivam yadav"))


const vowelString = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

console.log(vowelString("I am shivam yadav")); // Output should be 6
