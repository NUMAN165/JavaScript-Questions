// Find the max Number in the array 


// pop is used to remove last element 

// This is the first method that i have use simple sort and the i have consoled the number on 0 index
const findMax = (arr)=>{


    return arr.sort((a,b)=>
        b-a
    )[0]
}




// This is the second method where i have pop the last number from the Array 
const findMaxPop = (arr) =>{
    return arr.sort((a,b)=>a-b).pop()
}

// console.log(findMaxPop([-4,-42,-1,-11]))


// 3 method which is very simple is math.max from Javascript
// This function will only work when we will have a single number and not a arr

const findMaxMathSingle = ()=>{
    return Math.max(100,1,3,22,4)

}

console.log(findMaxMathSingle())


// Correct way is i have to transform the arr into numbers 

const findMathMax = (arr)=>{
    //when i will console array over here it will show arr is converted into numbers
    console.log(...arr)
    // here spread operator is used for converting array in numbers
    return Math.max(...arr) 
}

console.log(findMathMax([-1,4,-44,3,10,55,-1333]))


