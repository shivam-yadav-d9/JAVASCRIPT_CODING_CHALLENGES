const reverseString = (str) =>{
     str = str.split("");
     let result = str.reverse().join("")
     return result;
}

console.log(reverseString("Hello"))


const revString = (value) =>{
     for(let i=value.length-1;i>=0;i--){
       console.log(value[i]);
     }
}

console.log(revString("shivam"))