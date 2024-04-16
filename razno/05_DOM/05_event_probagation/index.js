//How the event travel trough DOM
//electricity runing trough a wive until it reaches its destination

// 3 phases
    // 1. Event Capturing
    // KAda se sklikne na dugme koji ima click event prikacen obavestava sve vise strukture ReadableStreamBYOBReader. Pocevsi od document pa html pa body pa div pa button i zatim prelazi u bubling fazu.
    // 2. Target
    // 1. Event Bubbling

window.addEventListener("click",function(){
    console.log("Window");
},true);

document.addEventListener("click",function(){
    console.log("Document");
},true);

document.querySelector(".div2").addEventListener("click",function(){
    console.log("div2");
},true);

document.querySelector(".div1").addEventListener("click",function(){
    console.log("div1");
},true);

document.querySelector("button").addEventListener("click",function(e){
    console.log(e);
},true);

//ako je true sto je treci opcioni parametar kod addEvent Listenersa icice od gore ka targetu tj buttonu. Tako ce se izvrsavati program
//Ako podesimo false po defoltu je false icice od buttona ka gore tj  Bubbling metod