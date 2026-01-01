// Find the number of vowels in a string 

// Find the count how many times a vowel occured in a string


const vowels = (str)=>{

    let vowels = ["a","e","i","o","u"]

    let arr = str.split("")
    console.log(arr)


    for(let charc of arr) {
        if(vowels.includes(charc.toLowerCase())){
            count++;
        }
    }

}


console.log(vowels("Heloo World"))