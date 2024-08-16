
const isPowerOFTwo = (num)=>{
      let op = false;
      for(let i=0;i<=num;i++){
        if(2**i==num){
            return true;
        }
      }
      return op;
}


console.log(isPowerOFTwo(8));
console.log(isPowerOFTwo(7))