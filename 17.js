// Write a funtion to convert string to camelcase and snakecase


// first converted this str to arr split and trimmed it 
// used map to convert first ele and all the ele to its expected case
//used slice to concatenate the elements 


 const lowerCase = (str)=>{
    str = str.trim().split(" ")

    str = str.map((currEle,index)=>{
        if (index === 0)
            return currEle.toLowerCase()
        else{
            return currEle.charAt(0).toUpperCase() + currEle.slice(1).toLowerCase();
        }
    })
    // console.log(str);

    return str.join("_")

    

 }

//  console.log(lowerCase("Hello world nuMaN"))


// to snake Case



const snakeCase = (str) =>{

    str = str.toLowerCase().split(" ")
    console.log(str);

    return str.join("_")
    


}

console.log(snakeCase("Hello world nuMaN"))
