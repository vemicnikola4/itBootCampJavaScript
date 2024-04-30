
let inputBr1 = document.getElementById("br1");
let inputBr2 = document.getElementById("br2");

// console.log(operacija);
let btnIzracunaj = document.getElementById("submit");
let btnReset = document.getElementById("reset");
let pRez = document.getElementById("pRez")

btnIzracunaj.addEventListener('click', (e)=>{
    e.preventDefault();
    let br1 = Number(inputBr1.value);
    let br2 = Number(inputBr2.value);

    let operacija = document.querySelector("input[name='operacija']:checked");
     if ( operacija.value == "+" ){
        let rez = br1 +br2;
        pRez.innerHTML = rez;


     }else if ( operacija.value == "-" ){
        let rez = br1  - br2;
        pRez.innerHTML = rez;
         

     }else if ( operacija.value == "*" ){
        let rez = br1 * br2;
        pRez.innerHTML = rez;
         
     }else if ( operacija.value == "/" ){
        let rez = br1  / br2;
        pRez.innerHTML = rez;
         
     }
    //  console.log(operacija.value);
    
    //  console.log("radi");

});

btnReset.addEventListener( 'click' ,() =>{
    pRez.innerHTML = "";
});