const sum = (num)=>{
      num = num.toString().split("");
      console.log(num);
      const result = num.reduce((pre, curr)=>{
        return pre+ Number(curr);
      })
      return result;
}
console.log(sum(12345))