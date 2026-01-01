// Write a function that returns sum of sqaures of number in an array 


const sumOFSquare = (arr)=>{

    return arr.reduce((accum,currEle) => (accum= accum +currEle*currEle),0)

}

console.log(sumOFSquare([1,2,3,4]))