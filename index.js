
function convertFahrToCelsius(input) {


    if (typeof input === "number") {
    
    return ((input - 32) * 5/9).toFixed(4);
    
    }else if (Number(input)){
    
    return ((input - 32) * 5/9).toFixed(4);
    
    } else {
        return `${input} is not a valid number but a/an ${typeof input}.`
    
      
    }
    }
    convertFahrToCelsius("hi")


    



