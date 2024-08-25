const truncate = (str , num)=>{
    if( str<=0){
        return str;
    }
    if(str.length > num){
        return str.slice(0 , num).concat("...")
    }
}


console.log(truncate("A-tisket a-tisket A green and yellow basket",8))