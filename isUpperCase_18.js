const isUpperCase = (str)=>{
       if(str.charCodeAt(0)>=65 && str.charCodeAt(0)<=90)
       {
        return true;
       }
       return false;
}
console.log(isUpperCase("M"))


