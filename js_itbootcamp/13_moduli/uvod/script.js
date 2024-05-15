//Moduli
//Sluze da se fizicki razdvoje fajlovi u razlicite celine
//Sa porastom kompleksnisti app javlja se potreba za modulima
//Obicno sadryi klase funkcije i/ili promenjive
//Lakse odrzavanje
//Oblast vazenja omogucavaju privatan prostor
//ponovna upotreba

//js fajlu je potrebna odredjena direktiva da postane modul

//Jedan modul je jedan js fajl

//Koriste se sledece direktive
    //export stavlja se za promenjive i funkcije koje se koriste van modula(promenjive, funkcije ili klase)
    //import koristi se za koriscenje funkcionalnosti drugog modula

let x = 5;
let  rezultat = x +5;

let racunaj = () => {
    console.log(rezultat + 10);
}
//kazemo export i u vit zag navodimo sta smo spremni da nudimo ostalima tj sta j enas modul spreman da ponudi drugima
export{
    rezultat,racunaj
};

//"use strict"; direktiva
//uvodi neka pravila koja se moraju ispostovati
//u modulima je automatski ukljucena use strict direktiva
