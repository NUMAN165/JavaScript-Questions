// Check whether char is lower case or upperCase 

// const isLowerCase = (char)=>{
//     if (char.charCodeAt(0) >= 65 && char.charCodeAt(0)<= 90) {
//         return true
//     }
//     return false
// }

// console.log(isLowerCase("a"))


// second and the easiest method


const isUpperCase = (char)=>{

    return char === char.toUpperCase();
    
}

console.log(isUpperCase("a"))
