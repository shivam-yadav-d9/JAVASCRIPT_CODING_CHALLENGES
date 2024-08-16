const sumOfArr = (arr)=>{

     let result = arr.reduce((pre,curr)=>{
        return (pre*pre+curr*curr);
     })
     return result;
}



console.log(sumOfArr([1,2,3]))