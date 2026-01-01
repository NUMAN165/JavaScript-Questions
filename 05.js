// Write a fucntion to sort a number in array


// cant use sort built in method 
// whenever any ascending and decending thing is asked always used comparision

// console.log(sortNumberInArray([5,4,77,3,8,2,98,1,10]))



const sortNumberInArray = (arr)=>{
    return arr.sort((a,b)=>
        a-b
)

}

console.log(sortNumberInArray([5,4,77,3,8,2,98,1,10]))
