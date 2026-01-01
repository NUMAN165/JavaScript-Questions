// Hash Generator from a given string 

//1.Output should contain all the words combined and should have first letter capital and a hashtag at begining

const generateHash = (str) =>{
    if(str.length > 288 || str.trim().length === 0) {
        return false;
    }
    str = str.split(" ")
    // console.log(str);
    // str = str.map((currEle)=>console.log(currEle[0]))
    str = str.map((currEle)=>currEle.replace(currEle[0].toUpperCase()))
    // console.log(str);
    str = `#${str.join("")}`
    console.log(str);
    return str 
}

console.log(generateHash("my name is numan technical"));


// Understand the topics of javascript and deveops what i have to learn 
// Understand first Javascript what is happening and then move on to backend
// I am still confused what to do since i cant waste my 1.3 years of experience in WEB 


