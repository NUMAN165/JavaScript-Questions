// Find the averrage number in the array for average use the reduce function 

// In reduce we have 4 parameters 


const findAverage = (arr)=>{

   let total =  arr.reduce((accu,currEle)=>accu+ currEle,0)
   console.log(total)
   console.log(arr.length)
   return total / arr.length;

}

console.log(findAverage([1,3,4,22,5,7]))