// Count the number of words occured in a string 

const countWord = (word, chrac) => {
    word = word.toLowerCase();
    chrac = chrac.toLowerCase();

    const totalCount = word.split("");  // turns string into array
    console.log(totalCount); // this will now print correctly

    // if you want to actually count occurrences:
    let count = 0;
    for (let ch of totalCount) {
        if (ch === chrac) {
            count++;
        }
    }
    return count;
};

console.log(countWord("MissIsipi", "I")); 





