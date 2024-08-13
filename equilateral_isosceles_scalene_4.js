const checkTriangleType = (a,b,c)=>{
    if(a==b && b==c){
        console.log("equilateral")
    }
    if(a==b||b==c||c==a){
        console.log("isosceles")
    }
    else{
        console.log("scalene")
    }

}

checkTriangleType(3,3,3)//equilateral
checkTriangleType(3,4,3)//isosceles
checkTriangleType(5,6,7)//scalene