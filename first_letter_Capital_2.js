const generator =(str)=>{
     words=str.split(" ")
     let firstLetterCapital=words.map((words)=>{
       return words.charAt(0).toUpperCase()+words.slice(1)
     })
     return firstLetterCapital.join(" ")
    
}

console.log(generator("my name is shivam yadav"))