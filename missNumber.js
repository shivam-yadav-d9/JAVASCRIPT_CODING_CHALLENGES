const missNumber = (a ,b) =>{
    let arr =[];
     while(a<=b){
        arr.push(a)
        a++;
     }
     return arr;
}

console.log(missNumber(3,9))