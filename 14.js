// Take a num as input and write a function isPowerOfTwo and check if the given number is a power of two or not if true return true or false


const isPowerOfTwo = (num)=>{

   let op = false
   for(let i = 1;i<num;i++){
    if(2**i===num){
        op = true 
    } 

   }
   return op;



}


console.log(isPowerOfTwo(1))
