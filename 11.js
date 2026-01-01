// Write a function that takes an number input and return sum of it

// when any question aries whrere we have only single number as the output then always use reduce


const sumOfNumbers = (num) =>{
    let arr = Array.from(String(num),Number)

    return arr.reduce((accum,currEle)=> accum+=currEle ,0)

}



// Sum of numbers nikal na hai 

const sumOfDigits = (num)=>{

    let sum = 0 

    while (num>0) {
        sum += num/10;
        num = Math.floor(num/10)
    }

    return sum

}

console.log(sumOfNumbers(1234))
