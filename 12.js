// Remove the duplicate numbers from an array and return a new arr

const removeDuplicates = (arr)=>{

    let newArr = [...new Set(arr)]
    return newArr
}

console.log(removeDuplicates([1,2,3,4,3,4,5,3]))
console.log(removeDuplicates([]))
console.log(removeDuplicates([4,4,5,2,3,4,3,2,4,1]))