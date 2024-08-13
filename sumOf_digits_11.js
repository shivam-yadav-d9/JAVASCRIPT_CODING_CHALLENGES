const sum=(num)=>{
    let sum=0;
    const numstr = num.toString();
     for(let i=0;i<=num.length;i++){
        sum= parseInt(numstr[i]);
     }
     return sum;
}

console.log(sum(123))