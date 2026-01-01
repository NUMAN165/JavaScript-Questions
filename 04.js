// Check triangle type is what ?

// If all sides equal then its equilateral,two side equal then isoceles traingle and if all ineqaul then scalene



const checkTraingleType = (a,b,c) => {
    if(a===b && b===c) {
        return "equilateral Trianlgle"
    }
    if(a===b || b===c || a===c ){
        return "isoceles triangle"

    }else{
        return "scalene triangle"
    }




}


console.log(checkTraingleType(3,3,3))
