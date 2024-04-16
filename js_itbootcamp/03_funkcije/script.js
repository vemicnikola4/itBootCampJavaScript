function ispisiTekst(tekst){
    console.log(tekst);
}

ispisiTekst("Hello world!");

let t = "Cao svete!";
ispisiTekst(t);

//funkcija koja prosledjuje id elementa gde da prikazemo sliku i putanju do slikel


function prikaziSliku( idElementa,  putanjaSlike){
    let element = document.getElementById(idElementa);

    element.innerHTML = `<img src="${putanjaSlike}">`;


}
prikaziSliku("div1","download.jpg");

