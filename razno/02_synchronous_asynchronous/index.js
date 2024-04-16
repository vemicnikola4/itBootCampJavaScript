//synchronous = Execute line by line in sequential maner line by line. Code that waith for operation to compleat.

//asynchronous = alows multiple operations to be performed cuuncurentlz without waiting.
    //does not vlock the execution flow and alows the program to continue.
    //(I/O Operations, network request, fetching data)
    //Handled with: calbacks, promises, async/await

    setTimeout(() => console.log("task 1"),3000);
    //setTimeout one of many asynchronous functions.Kaze izvrsi ovaj kod za 3000 ms

    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
    //Jos jedan nacin kako se iyvrsava asyncronous code je koriscenjem callback funkcija.

    function function1(callback){
        setTimeout(() => {console.log("task 1");
                            callback()},3000);

    }
    function function2(){
        console.log("Task 2");
        console.log("Task 3");
        console.log("Task 4");
    }
    function1(function2);