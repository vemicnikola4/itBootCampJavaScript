//Error = an object that is created to represent a problem that occurs.
        //offten with user input or etablishing connection

//try { } encloses code that can potentialy cause an error

//catch { } catch and handle any thrown Errors from try

//finaly { } optional . Always excutes. Used mostly for clean up ex. close files, close connections , relise resources

//NETWORK ERRORS
//PROMISE REJECTIONS
//SECURITI ERRORS

//ako je potencijalno problematican kod stavlja se u try blog. catch blog sledi i ako se javio error hvata taj error.
try {
    console.log('Hello');
}
catch(error){
    console.log(error);
}

finally{
    console.log("This always executes");
}

try{
    //ovaj kod stavljamo u try blok jer neko moze pokusati da deli sa 0 isl i dobijamio infiniti loop ili gresku
    const dividend = Number(window.prompt("Enter a dividende:"));
    const divisor = Number(window.prompt("Enter a divisor:"));
    
    if ( divisor == 0 ){
        throw new Error('Cant divide with 0 ');
    }
    if ( isNaN(dividend)|| isNaN(divisor)){
        
        throw new Error('Values must be a number');
    }
    
    const result = dividend / divisor;
    
    console.log(result);
}
catch(error){
    console.log(error);
}
finally{
    console.log("You`ve reached the end");
}