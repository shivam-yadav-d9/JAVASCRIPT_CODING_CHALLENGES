const findmidian = (arr) =>{
    //  console.log(arr.sort())         //in string in different                                         //in string in different

    console.log(arr.sort((a ,b)=>a-b));
    const length = arr.length;
    const middle = Math.floor(length/2);

    if(length % 2 ===0){
        return (arr[middle-1] + arr[middle])/2;

    }
    else{
        return arr[middle]
    }


}

console.log(findmidian([5,3,9,1,7]));
console.log(findmidian([5,3,9,1,7,9]));
