const findlongestword=(str)=>{
      if(str.trim().length===0){
        return false;
      }
     words=str.split(" ")
    //  wordSort=words.sort() //  its sort as unicode value
      let result = words.reduce((pre,curr)=>{
        return pre.length>curr.length?pre:curr;
     })
    //  console.log(wordSort)
    return result;

}

console.log(findlongestword("hello this is javascript coding challenge  "))