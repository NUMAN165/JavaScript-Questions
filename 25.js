// Write a function to call an factorial of a number using recursion


const findFact = (num) =>{
    if (num ===1)
        return 1 
    else{
        return num * findFact(num -1) 
    }

}

console.log(findFact(5));
