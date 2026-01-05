// Reverse a string without using any built methods 


const reverseString = (str)=>{


    let rStr = ""
    for(let i = str.length -1 ;i>= 0; i--) {
        // console.log(str[i]);
        rStr = rStr + str[i]
        
    }

    return rStr;

}

console.log(reverseString("hello"));


//op: olleh
