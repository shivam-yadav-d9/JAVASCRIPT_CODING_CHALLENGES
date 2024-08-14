const arr=(num)=>{
      const result = num.filter((curr, index, arr)=>{
         return arr.indexOf(curr)===(index)
      })
      return result;
}

console.log(arr([1, 4, 3, 7, 5, 3, 1]))