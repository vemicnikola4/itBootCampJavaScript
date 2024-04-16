//Arrow 
//Fat arrow funkcije

    //***Anonimne funkcije su funkcije koje nemaju svoje ime

//Kako pozvati te funkcije?? Kad vec nemaju ime.
//Mogu se pozivati na vise nacina

let suma = function(a,b){
    console.log(this);
    return a+ b;
};

// varijabli suma dodeljujemo anonimnu funkciju kao njenu vrednost;
// suma = function(a,b){
//     return a * b;
// };


console.log(suma(2,3));

// Arrow funkcije su poseban vid anonimnih funkcija(skraceni zapis);
//U okviru aonimnih funkcija postoje arrow funkcije.
//Arr f imaju dva specificna svojstva koja ih izdvaja u okviru ann f
    //1.Imaju skracen zapis
    let suma2 = (a,b) => {
        console.log(this);

        return a+b;
    }
    let hello = () => {
        console.log("HEllo world");
    }
    hello();
console.log(suma2(2,8));

    //2. Znacenje kljucne reci this
    //Razlika je sto rade u kontestu bloka u kojem su definisane!

//scope oblast vazenja promenjive
//let vazi u bloku u kojem je definisan

//u js funkcija moze da dohvati promenjivu iz globalnog opsega.
// let x;

//var oblast vazenja je unutar funkcije u kojoj se nalazi.
function neparan(n){
    if ( n % 2 == 1 ){
        var x = true;//sa var je dostupna unutar funkcije u kojoj je deklarisana. Let jr dostupna samo u bloku a sa var unutar cele funkcije.
        //var dozvoljava redeklaraciju jer je to ista promenjiva.
    }else{
        var x = false;
    }
    return x;
}
{
    let x; 
    //postoji samo unutar viticastih zagrada kada se zavrsi ovaj blok x nestaje iz memorije
}
console.log(neparan(10));

let neparan2 = (n)=>{
    if ( n % 2 == 1 ){
        return true;
    }else{
        return false;
    }
}
console.log(neparan2(11));

let neparan3 = (n) => {//promenjiva neparan3 a vrednost joj je arrow funkcija.
    
    return ( n % 2 == 1 ) ? true : false;//ternarni operator ?: ispituje se ulsov pre znaka pitanja ako je tacan dobija vrednost tj drugi parametar ako nije onda ceo izraz dobija vrednost treceg parametra.
}
let neparan5 = (n) =>{
    return ( n % 2 == 1 );
}
console.log(neparan3(9));
console.log(neparan5(5));

let radniDan = ()=>{
    let dan = new Date();
    let day = dan.getDay();
    // let day = 6;
    
    return ( day > 0 && day < 6);
}
// let day = radniDan();
// console.log(day);

    //AKo se telo arrow funkcije sastoji samo od return naredbe nisu potrebne viticaste zagrade;

let neparan6 = (n) => ( n % 2 == 1 );
console.log(neparan6(5));

let uvecajZaDva = (n) => ( n+=2);
console.log( uvecajZaDva(5));

//funkcije koj eprimaju samo jedan parametar nismo u obavezi da navedemo zagrade;
// a ni komanda return
//zagrade su obavezne ako nema , ili ima vise od jednog parametra

let uvecajZaDva2 = n => ( n+=2);
console.log( uvecajZaDva2(10));
let prikazi2 = () => ( 2);
console.log( prikazi2());


let max2 = (a,b)=> {
    if ( a > b ){
        return a;

    }else if ( b > a){
        return b;
    }else{
        return "Jednaki su";
    }
}

let max3 = (a,b)=> {
    return ( a > b ) ? a : b;
}
let max4 = (a,b) => (a>b) ? a : b;
console.log( max2(5,5));
console.log( max3(11,8));
console.log( max4(8,8));
alert(max4(1,5));
// window.alert(max4(1,5));

let maxOd4 = (a,b,c,d) => max4(max4(a,b),max4(c,d));
window.alert(maxOd4(99,5,11,85));

let prikaziSliku = putanja => `<img src='${putanja}'>`;
// document.write(prikaziSliku('download.jpg'));
document.getElementById('div4').innerHTML+=(prikaziSliku('download.jpg'));

//forEach
//iterira kroz sve clanove niza.
//kao parametar prihvata callback funkciju

//forEach je metoda koju ima svaki niz i poziva se u obliku
//a.forEach(a);
//prihvata samo jedan parametar callback funkciju
//imamo dve opcije 
    //1.Iteracija kroz sve elemente
    imena.forEach(element => {
        console.log(element)
    });