



const sortArray = (arr) => {
   return arr.sort((a, b) => {
      return a - b;
   });
}

console.log(sortArray([1, 3, 6, 2, 8])); // Output: [1, 2, 3, 6, 8]









// const sortArray =(arr)=>{
//     let value = arr.reduce((pre,curr)=>{
//         return pre<curr?pre:curr;
//     })
//     return value;

// }

// console.log(sortArray([1,3,6,2,8]))