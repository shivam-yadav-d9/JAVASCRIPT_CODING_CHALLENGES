const vowelSrting = (str)=>{
     let vowel = ['a','e','i','o','u']
     let count = 0;
     str.toLowerCase();
     for(let i=0; i<=str.length;i++){
        if(vowel.indexOf(str[i])){
            count++;
        }
     }
     return count;
}

console.log(vowelSrting("I am shivam yadav"))