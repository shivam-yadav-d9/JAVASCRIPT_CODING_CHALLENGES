const Palindrom=(num)=>{
      //  let word= num.tostring()
      let newWord =num.split("").reverse().join("")
     if( newWord==num){
        console.log("Palindrom")
     }
     else{
      console.log("not palindrom")
     }
}

Palindrom("level");
Palindrom("hello")