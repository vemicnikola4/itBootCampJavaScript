

    //Napraviti niz od tri imena Proci nizom i ispisati imena.
        //Svako u novom linku Ako ime pocinje sa S linkse otvara u novom tabu
        //U listi kao stavke liste naizmenicno obojiti sa dve raylicite boje
        //U jednoj koloni tabele postaviti okvir marginu i pading celijama tabele

        //Navigacija kroz dom stablo
        //parentNode - roditeljski cvor.
            //Svaki element u DOM stablu ima tacno jedan parent node
        //childNodes[nodenumber] -direktni potomak sa zadatim indeksom
        //firstChild - prvi direktnin potomak
        //lastChild -poslednji direktni potomak
        //nextSibling  - naredni 
        //previousSibling - predhodni brat element


//***MEnjanje klasa elementima

        //element.classList - lista klasa koje element poseduje
        
    //metode

        //element.classListAdd("class") - dodavanje klase
        //element.classListRemove("class") -brisanje odredjene klase
        //element.classList.toggle Ako element ne poseduje odredjenu klasu dodaje je u suprotnom je brise
        //element.classList.contains("class") ispisuje da li element ima odredjenu klasu
    
let parsNode = document.querySelectorAll("p");
let pars = document.getElementsByTagName("p");

let br = 0;
// parsNode.forEach(e =>{
//     if ( br % 2 == 0){
//         e.classList.add("error");
//     }else{
//         e.classList.add("success");
//     } 
//     br++;
// })

for ( let i = 0; i < pars.length; i++ ){
    pars[i].classList.add("par");
}

br = 1;


parsNode.forEach(e =>{
   
    if (e.textContent.includes("Error") || e.textContent.includes("error")){
        e.classList.add("error");
    }else if (e.textContent.includes("Success") || e.textContent.includes("success")){
        e.classList.add("success");

    }
});

parsNode.forEach(e =>{
    if ( br == 4 ){
        br = 1;
    }
    if ( br == 1 ){
        e.style.fontSize = "15px";
    }else if (br == 2 ){
        e.style.fontSize = "20px";

    }else{
        e.style.fontSize = '25px';

    } 
    br++;
})

parsNode.forEach(e =>{
    e.classList.toggle("error");
})

//***Dodavanja i brisanje tagova

//element.createElement('tag') Kreiranje cvora DOM stabla kao zadatog HTML elementa
//element.removeChild(child) brisanje yadatog cvara DOM stabla
//element.appendChild(child) dodavanje zadatog cvora(elementa) kao dete odredjenog cvora(elementa)
//element.replaceChild(new,old)
//document.write(text) dodavanje teksta

let noviDiv = document.createElement("div");
noviDiv.innerHTML = "Div kreiran u JSu";
noviDiv.style.backgroundColor = "green";
// document.body.appendChild(noviDiv); razlika izmedju apend i appendChild je ta sto u append mozemo vise elemenata da dodadamo a sa appendChild samo jedan.
document.body.append(noviDiv);
let noviNaslov = document.createElement("h3");
noviNaslov.innerHTML = "NAslov kreiran u JSU";
noviDiv.appendChild(noviNaslov);

let ul = document.createElement('ul');
noviDiv.append(ul);
// let li1 = document.createElement('li');
// li1.innerHTML = "prva stavka liste";
// let li2 = document.createElement('li');
// li2.innerHTML = "druga stavka liste";
// let li3 = document.createElement('li');
// li3.innerHTML = "treca stavka liste";
// let li4 = document.createElement('li');
// li4.innerHTML = "cetvrta stavka liste";
for ( let i = 1; i < 6; i++){
    let li = document.createElement('li');
    li.innerHTML = i +". stavka liste";
    ul.append(li);
}

//uklonimo prvo dete
// ul.removeChild(ul.firstChild);
 ul.removeChild(ul.childNodes[0]);
//ul.remove(ul.childNodes[0]);

let img = document.createElement('img');
img.src = "download.jpg";
let li = document.createElement('li');
li.appendChild(img);
li.style.listStyleType = "none";
ul.appendChild(li);

let btnImeOsobe = document.getElementById("btnImeOsobe");
let imeOsobe = document.getElementById("imeOsobe");
let pImeOsobe = document.getElementById("pImeOsobe");

btnImeOsobe.addEventListener("click", () =>{
    
    let imeOsobeValue = imeOsobe.value;  
    pImeOsobe.innerHTML = "Hello" + imeOsobeValue;
    

});
//predavanje 23. 25min do kraja projekat cvecara i kviy.