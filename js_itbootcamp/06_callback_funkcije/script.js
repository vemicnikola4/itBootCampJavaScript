

// let niz = [1,5,88,654,"Nikole"];

// function ispisNizKonzola(niz){
//     let string = "";
//     for( let i = 0; i < niz.length; i++){
//         string+=niz[i] + " ";
//     }

//     console.log(string);
// }
// ispisNizKonzola(niz);
// console.log("nikola");



// for ( let i = 0; i < nizStringova.length; i++){
//     console.log(`Duzina ${nizStringova[i]} je ${nizStringova[i].length}`);
// }
// let najduziString = nizStringova[0];
// for ( let i = 1; i < nizStringova.length; i++){
//     if ( nizStringova[i].length > najduziString.length ){
//         najduziString = nizStringova[i];
//     }
// }
// console.log(`Najduzi sting je ${najduziString} njegova duzina je ${najduziString.length}`);

// let imaA = 0;
// for ( let i = 0; i < nizStringova.length; i++){
//     nizStringova[i].includes('a') ? imaA++ : imaA=imaA;
// }

// console.log(imaA);
// let pocinjeSaA = 0;
// for ( let i = 0; i < nizStringova.length; i++){
//     if ( nizStringova[i].startsWith('a') || nizStringova[i].startsWith('A')){
//         pocinjeSaA++;
//     }
// }
// console.log(pocinjeSaA);

let nizStringova = [
    'Nikola',
    'Metalni okviri za vrata',
    'Namestaj',
    'Elektricni ttrimeri'
];
let imena = [
    "Pera",
    "Milan",
    "Lazar",
    "Milica"
]
function ispisNizKonzola(niz){
    let s = "";
    for ( let i = 0; i < niz.length; i++){
       s += niz[i] + " ";
    }
    console.log(s);
}

// ispisNizKonzola(nizStringova);
// ispisNizKonzola(imena);

function ispisNizaStranica(niz){
    let s = "";
    for ( let i = 0; i < niz.length; i++){
        s += niz[i] + " ";
    }
    let d = document.getElementById('div1');
    d.innerHTML += s;

}
// ispisNizaStranica(nizStringova);
// ispisNizaStranica(imena);

//Sta ce nam Callback funkcija 
//kad uporedjujemo ove predhodne funkcije primecujemo da je prvi deo isti
//Da imamo jednu funkciju kojoj prosledimo dva parametra (niz, nacin) na koji ce string da se ispise. NAcin ce biti callback funkcija!
//Mora da saceka da se pozove funkcija ispis niza

function ispisKonzola(poruka){
    console.log(poruka);
}
function ispisStranica(poruka){
    let d = document.getElementById('div1');
    d.innerHTML += poruka + " ";
}

function ispisNiza(niz, callback){
    let s = "";
    for ( let i = 0; i < niz.length; i++){
        s += niz[i] + " ";
    }
    callback(s);
}

//callback funkcija. Saceka da se neka funkcija izvrsi pa se poziva.
ispisNiza(nizStringova,ispisKonzola);
ispisNiza(nizStringova,ispisStranica);
ispisNiza(imena,ispisStranica);
//callback moze da bude bilo koja funkcija
//kada hocemeo da kontrolisemo reosled poziva
//da se ne prekucava kod je jedno od uloga
ispisNiza([1,2,3,4], function(p){
    console.group(p);
});
ispisNiza([1,2,3,4], function(p){
    let d = document.getElementById('div1');
    d.innerHTML += p;
});

ispisNiza([7,6,8,7,11], p => {
    let d = document.getElementById('div1');
    d.innerHTML += p;
})
//forEach
//iterira kroz sve clanove niza.
//kao parametar prihvata callback funkciju

//forEach je metoda koju ima svaki niz i poziva se u obliku
//a.forEach(a);
//prihvata samo jedan parametar callback funkciju
//imamo dve opcije 
    //1.Iteracija kroz sve elemente
    // imena.forEach(element => {
    //     console.log(element)
    // });
    //2.iteracija kroz elemente i njihove indekse
    imena.forEach((element,i) => {
        console.log(`redni broj ${i+1}. ${element}`);
    });
    let automobili = ['audi','fiat','mercedes'];

    imena.forEach(ispisKonzola);
    nizStringova.forEach(ispisKonzola);
    nizStringova.forEach(ispisKonzola);
    automobili.forEach(ispisStranica);

    let sumaElemenata = niz=>{
        let suma = 0;
        niz.forEach(element=>{
            suma += element;
        });
       return suma;
    }
    let a = [6,8,9,3,17,17];
    console.log(sumaElemenata(a));

    let maxVr =( niz )=> {
        let max = niz[0];
        niz.forEach (element => {
            if ( element > max ){
                max = element;
            }
        });
        return max;
    }

    console.log( maxVr(a));

    let indMaxEl = niz => {
        let maxInd = 0;
        let max = niz[0];
        niz.forEach((el,i) => {
            if ( el > max ){
                max = el;
                maxInd = i;
            }
        });
        return maxInd;
    }
    console.log( indMaxEl(a));

    let veciOdSv = niz => {
        let br = 0;
        let sum = 0;
        niz.forEach(el=>{
            sum += el;
        });
        let av = sum / niz.length;
        niz.forEach(el=>{
           if ( el > av ){
            br++;
           }
        });
        return br;
    }

    console.log(veciOdSv(a));

    let sviIndMaxVr = niz => {
        let max = maxVr(niz);
        let sviInd = [];
        niz.forEach((el,i) => {
            if ( el == max ){
                sviInd.push(i);
            }
        });
        return sviInd;
    }
    // console.log( sviIndMaxVr(a));

    let duzinaElUNizu = niz =>{
        let duzinaNiz = [];
        niz.forEach(element =>{
            duzinaNiz.push(element.length);
        });
        return duzinaNiz;
    
    }
    console.log(duzinaElUNizu(nizStringova));
    
    nizStringova.forEach(element => {
        console.log(element.length);
    });

    let celobrojniNiz = [
        1,5,88,97,577.1,32,55,155
    ];
    
    console.log( indMaxEl(celobrojniNiz));

    let indElVecihOdAvg = niz => {
        let sum = 0;
        let nizVeciOdAvg = [];
        niz.forEach(element =>{
            sum += element;
        })
        let avg = sum / niz.length;
        niz.forEach((element,i)=>{
            if ( element > avg){
                nizVeciOdAvg.push(i);
            }
        });
        return nizVeciOdAvg;
    }
    console.log( indElVecihOdAvg(celobrojniNiz));

