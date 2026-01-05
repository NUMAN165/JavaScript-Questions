// Find median of a give array Write a func to check the median of an given array


const findMedian = (arr)=>{

   console.log(arr.sort((a,b)=>a-b))

   let length = arr.length
   let mid = Math.floor(length/2)

//    console.log(mid);

   if(length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
   } else {
    return arr[mid]
   }
   
}

console.log(findMedian([2,4,3,5]));
console.log(findMedian([3,1,9,2,5]));
