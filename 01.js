// Longest Word from the array 

//1.create a function name findLongestWord take str as parameter
//2.split the words based on space split(" ")
//3.important step with sort also use two paramter in a callback func.
//4.sort based on the length to get the asceding and decsending 
//5.return the words from the array which you have got 


const findLongestWord = (str)=>{

    if(str.trim().length === 0 ) {
        return false
    }

    words = str.split(' ');
    console.log(words);

    words = words.sort((a,b)=> b.length-a.length);
    console.log(words);
    return words[0]
}


console.log(findLongestWord("This is the longest word game in course"))

