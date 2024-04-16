//DOM
//Document Object Model
//programska reprezentacija za html
//predstavlja stranicu na nacin koji omogucuje programu munjanje stila i sadrzaja HTML stranice
//DOM predstavlja HTML dokument preko objekta povezanih u strukturi koje se zove stablo

//document
//html
//head   //body
//title         //h1            //div
//text node     //text node     //p
                                //text node

//kada nema vise potomaka ti cvorovi se nazivaju listovi

// console.log(document);
//Najcesce metode za dohvatanje  nekih elemenata;

// document.getElementById('nekiId');//vraca objekat-html elementa sa datim idem
// document.getElementsByClassName("className");//vraca HTML lokacije svih elemenata sa datom klasom
// document.getElementsByName('name');//vraca node listu svih elemenata koji imaju zadatu vrednost name atributa
// document.getElementsByTagName('div');//vraca html kolekciju svih div tagova

let e1 = document.getElementById('p2');
console.log(e1);//jedinstven objekat iz DOM stabla

let e2 = document.getElementsByClassName('par');
console.log(e2);//vraca kolekciju objekata iz dom stabla

//pristup elementima html kolekcije. Ne moze forEach mora for
for (let i = 0; i < e2.length; i++ ){
    console.log(e2[i]);
}


//Mozemo da ga prebacimo u niz pa sa forEach
// let niz = Array.from(e2);
// niz.forEach( e => {
//     console.log(e);
// });

let e3 = document.getElementsByTagName('p');
console.log(e3);//html kolekcija

let e4 = document.getElementsByName('p');
console.log(e4);//vraca NodeList  (drugi tip podataka). Lista cvorova.. U sustini shvatamp kako neki niz. ali kod NodeListe mozemo i for i forEach.
//Svi nizovi pripadaju u klasi Array

// document.querySelector
//kao parametar prima bilo koji validan query selector
//kao rezultat vraca objekat prvi html element koji yadovoljava css selektor

// document.querySelectorAll
//kao parametar prima bilo koji validan query selector
//kao rezultat vraca Node listu svih html elemenata koji yadovoljavaju dati css selektor

//NodeList niz cijim clanovima mozemo pristupiti forEach petljom
let t1 = document.querySelector("#p1");
console.log(t1);//vraca objekat iz DOm stablaprvi html objekat koji odgovara datom CSS selektoru
let t2 = document.querySelectorAll('.par');
console.log(t2);//vraca NOdeList niz objekata koji odgovaraju datom selektoru

t2.forEach(e=>{
    console.log(e);

});

let t3 = document.querySelectorAll('div p.par, div a.par');//sve paragrafe sa klasom par koji se nalaze u divu i a tagove unutar diva sa klasom par
console.log(t3);
t3.forEach(e=>{
    console.log(e);

});

let p1 = document.querySelector('p');
console.log('zadatak 1');

console.log(p1);

let p2 = document.querySelector('p.error');
console.log('zadatak 2');

console.log(p2);

let table = document.querySelectorAll('table tr');
console.log(table);
console.log(table[table.length - 1]);

let rows = document.getElementsByTagName('tr');
let lastRow = rows[rows.length -1];
console.log(lastRow);


let links = document.querySelectorAll('a');
console.log(links);

let imgs = document.querySelectorAll('img');
console.log(imgs);

//Menjanje sadrzaja elemenata

//svosjtvo
// element.innerHtml = "Novi sadryaj"; //menja sadrzaj nekog elementa
// element.attribute = "Nova vrednost"; //postavlja vrednost atributa nekog elementa
// element.style.property = "nova vrednost"; //postavlja stil datom elementu

// //metoda
// element.setAttribute('attribute','nova vrednost'); //postavlja vrednost atributa nekog elemanta

// let link = document.querySelector('a');
// link.innerHTML = "<span style='font-weight:bold'>Novi text prvog linka</span>";//+= dodaje se sadrzaj ne zamenuje postojeci

// link.href = "https://google.com";//mozemo direktno da pristupimo atributu
// link.setAttribute('href',"https://facebook.com");//moze i ovom metodom setAtribute
// link.target = "_blank";//link se otvara u novom tabu
// link.setAttribute('target',"_blank");
// link.id = "pera";
let linkovi = document.querySelectorAll('a');
console.log(linkovi);
linkovi.forEach( link => {
    // link.style.color = "red";//kada menjamo stil 
    // link.style.fontSize='18px';
    // link.style.textDecoration = 'none';

    link.setAttribute('style','color:red; font-size:18px; text-decoration:none');
    //moze i ovako
});
//cas 21/4 poslednjih 2 min. Vezbanje
