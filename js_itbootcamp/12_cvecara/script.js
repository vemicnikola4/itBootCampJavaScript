
let ruzeInput = document.getElementById('ruze');
let ljiljaniInput = document.getElementById('ljiljani');
let gerberiInput = document.getElementById('gerberi');

//checkBoxes
let checkBoxBombonjera = document.getElementById("ckBoxBombonjera");
let checkBoxCokolada = document.getElementById("ckBoxCokolada");
let checkBoxSampanjac = document.getElementById("ckBoxSampanjac");



let divPorudzbina = document.getElementById("divPorudzbina");
let divIspisCene = document.getElementById("divCena");
let pIspisCene = document.getElementById("pIspisCene");
// console.log(divPorudzbina);

let hVasaPorudzbina = document.createElement("h6");
hVasaPorudzbina.innerHTML= "Vaša porudžbina: ";

//button
let submit = document.getElementById('submitPorudzbinu');
let reset = document.getElementById('resetPorudzbinu');

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    divPorudzbina.innerHTML = "";

    divPorudzbina.prepend(hVasaPorudzbina);

    let ruze = Number(ruzeInput.value); 
    if(ruze < 0 ){
        ruze = 0;
    }  
    let ljiljani = Number(ljiljaniInput.value);   
    if(ljiljani < 0 ){
        ljiljani = 0;
    }  
    let gerberi = Number(gerberiInput.value);
    if(gerberi < 0 ){
        gerberi = 0;
    }  
    let zbir = ruze * 150 + ljiljani * 120 + gerberi * 70;
    
    if ( checkBoxBombonjera.checked ){
        zbir += 500;
    }
    if ( checkBoxCokolada.checked ){
        zbir += 500;
    }
    if ( checkBoxSampanjac.checked ){
        zbir += 500;
    }
    

    
    if ( ruze > 0 ){
        let divRuze = document.createElement("div");
        divRuze.classList.add("row","m-1","divPrikazCveca");
        divPorudzbina.append(divRuze);

        for ( let i = 0; i < ruze; i++ ){
            let divCvet = document.createElement("div");
            divCvet.classList.add("col-3","p-1");
            let imgCvet = document.createElement("img");
            imgCvet.src = "ruza.jpg";
            imgCvet.classList.add("w-100","h-100");
            divCvet.append(imgCvet);
            divRuze.append(divCvet);
    
        }
    }
    if ( ljiljani > 0 ){
        let divLjiljani = document.createElement("div");
        divLjiljani.classList.add("row","m-1","divPrikazCveca");
        divPorudzbina.append(divLjiljani);
        for ( let i = 0; i < ljiljani; i++ ){
            let divCvet = document.createElement("div");
            divCvet.classList.add("col-3","p-1");
            let imgCvet = document.createElement("img");
            imgCvet.src = "ljiljan.jpg";
            imgCvet.classList.add("w-100","h-100");
            divCvet.append(imgCvet);
            divLjiljani.append(divCvet);
    
        }
    }
    if ( gerberi > 0 ){
        let divGerberi = document.createElement("div");
        divGerberi.classList.add("row","m-1","divPrikazCveca");
        divPorudzbina.append(divGerberi);
        for ( let i = 0; i < gerberi; i++ ){
            let divCvet = document.createElement("div");
            divCvet.classList.add("col-3","p-1");
            let imgCvet = document.createElement("img");
            imgCvet.src = "gerber.jpg";
            imgCvet.classList.add("w-100","h-100");
            divCvet.append(imgCvet);
            divGerberi.append(divCvet);
    
        }
    }
    //radio
    let nacinPlacanjaIspis = "";
    let nacinPlacanjaRadio = document.querySelector("input[name='nacinPlacanja']:checked ");
    if ( nacinPlacanjaRadio.value == "kartica"){
        nacinPlacanjaIspis = "Nacin placanja kartica, ostvarili ste 10% popusta.";
        zbir  = zbir - (zbir * 0.1); 
    }
    divPorudzbina.append(pIspisCene);
    pIspisCene.innerHTML = `Cena vaše porudžbine je ${zbir} RSD. ${nacinPlacanjaIspis}`;
    pIspisCene.classList.add("border","border-success","p-3","text-success");
    // ruze = 0;
    // ljiljani = 0;
    // gerberi= 0;
    
});
reset.addEventListener('click',()=>{
    divPorudzbina.innerHTML = "";
    // pIspisCene.innerText = "";
    // pIspisCene.classList.remove("border","border-success","p-3");


    // // console.log(divPorudzbina.childNodes);
    
    // // for ( let i = 0; i < divPorudzbina.lenght; i++ ){
    // //     console.log ( divPorudzbina[i]);
    // // }
    // divPorudzbina.childNodes.forEach(element => {
    //     console.log( element);
        
    // });

});

// console.log(nacinPlacanjaRadio);

// console.log(checkBoxBombonjera);
// console.log(checkBoxCokolada);
// console.log(checkBoxSampanjac);
// console.log(ruze);
// console.log(ljiljaniInput);
// console.log(gerberiInput);