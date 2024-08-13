const arr = (num)=>{
    let result = num.reduce((pre,curr)=>{
        return (pre+curr)
    },0)
    return result/num.length;
}
console.log(arr([1,3,6,3,7,9]))