
let imeOsobeInput = document.getElementById("imeOsobe");
let btnImeOsobe = document.getElementById("btnImeOsobe");
let pImeOsobe = document.getElementById("pImeOsobe");
let pol = document.getElementsByName("pol");

btnImeOsobe.addEventListener("click", ()=>{
    let ime = imeOsobeInput.value;
    pImeOsobe.innerHTML = `Hello ${ime}`;
});

// let radioM = document.getElementById("muskiPol");
// let radioZ = document.getElementById("zenskiPol");
// let radioN = document.getElementById("nPol");
//moze i ovako
let radioM = document.querySelector("#muskiPol");
let radioZ = document.querySelector("#zenskiPol");
let radioN = document.querySelector("#nPol");

btnImeOsobe.addEventListener("dblclick", ()=>{
   //1.nacin
   //kada ima dosta radio buttona ovo je dosta lose resenje
    // if(radioM.checked){
    //     console.log("Muski pol");
    // }else if ( radioZ.checked ){
    //     console.log("Zenski pol");

    // }else{
    //     console.log("Neopredeljen");
    // }
    //2.nacin
    // let checked = document.querySelector("input[name='pol']:checked ");
    // console.log(checked.value);

    // 3.nacin
    //Selektuj mi sve radio buttone po name atributu
    

    // let polRadios = document.getElementsByName("pol");
    // polRadios.forEach( e =>{
    //     if (e.checked == true){
    //         console.log(e.value);
    //     }
    // });
    //vraca node listu

    // 4.nacin
    //selektuj mi sve radio buttone po name atributu
    let polRadio = document.querySelectorAll("input[name='pol']");

    polRadio.forEach(e=>{
        if ( e.checked){
            console.log( e.value );
        }
    });

});

let br = document.querySelector("input#kBroj");
let btnBrNaKv = document.querySelector("button#btnKvBr");
console.log(btnBrNaKv);
let pRezBrNaKv = document.querySelector("p#rezBrNaKv");

btnBrNaKv.addEventListener("click" , ()=>{
    pRezBrNaKv.innerHTML = br.value * br.value;
});

let brNaPola = document.getElementById("brNaPola");
let btnbrNaPola = document.getElementById("btnbrNaPola");
let pRezBrNaPola = document.getElementById("rezBrNaPola");

btnbrNaPola.addEventListener("dblclick", ()=>{
    pRezBrNaPola.innerHTML = brNaPola.value / 2;
});
// e.priventDefault
//event 