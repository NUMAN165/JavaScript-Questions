// Create a function and return true if all the elements of an arr is eqaul
// length of an arr should also be equal


const findEqual = (arr1,arr2)=>{

    if (arr1.length !==arr2.length ) {
        return false;
    }

    return arr1.every((currEle,index)=> currEle === arr2[index])

}

console.log(findEqual([1,2,3],[1,2,3]))
console.log(findEqual([2,3,4],[2,3,5]))