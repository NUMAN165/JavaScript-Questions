// find how many times a number is repaeting in an obj in key value pair 




const numbers = [1,2,2,3,2,4,1,4,3,6]

let count = {}

for (let element of numbers) {

    count[element] = (count[element] || 0) + 1

}

console.log(count);
