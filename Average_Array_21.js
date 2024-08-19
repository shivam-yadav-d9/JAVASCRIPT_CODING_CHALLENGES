
const averageArray = (arrAvg) =>{
    
    let result = arrAvg.reduce((pre, curr)=>{
        return pre+curr;
    })
    return result/arrAvg.length;
}
console.log(averageArray([1,2,3,4,5,6]))