// Write a function that takes an arr as an input and find the minimum number in that array 


const findMin = (arr)=>{

    const reesult =  arr.sort((a , b)=>
        b-a

    
)
return reesult.pop()
}

// console.log(findMin([2,3,1,4,6]))
// console.log(findMin([-2,-3,-1,-4,-6]))
// console.log(findMin([]))
// console.log(findMin([22,34,-1,24,6]))


const findMins = (arr)=>{
    return Math.min(...arr)

}
console.log(findMins([1,4,5,6,3]))


    


    
