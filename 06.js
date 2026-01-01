// Given function is a palindrome or not add igonore for space , punctuations , and special charcters 
//This thing is used for replace(/\W/g,""); for replacing the special characters 

const isPalindrome = (str)=>{


    str === str.toLowerCase().replace(/\W/g,"");
    let reverseString = str.split("").reverse().join('')
    console.log(reverseString)

    return str === reverseString ? true :false;
}


console.log(isPalindrome("racecar"))
console.log(isPalindrome,"RacEcar")