
let vremeSati = 0;
let vremeMinuti = 25;

// let minOdPOnoci = vremeSati * 60 + vremeMinuti; 
// document.getElementById("d1").innerHTML = `Ukupno je proslo ${minOdPOnoci} minuta od ponoci.` ;


// let sati = Math.floor(minOdPOnoci / 60);
// let minuti = minOdPOnoci % 60;
// console.log(minuti);
// console.log(sati);

// document.getElementById("d2").innerHTML = `Ukupno je proslo ${sati} : ${minuti} od ponoci.` ;


// let doPonoci = (24 * 60) - minOdPOnoci;
// console.log("Minuta do ponoci " + doPonoci);
// let cenaRobe = 1448;
// let novcanica = 2000;

let time = new Date();

let h = time.getHours();
let m = time.getMinutes();


let minOdPOnoci = h * 60 + m; 
document.getElementById("d1").innerHTML = `Ukupno je proslo ${minOdPOnoci} minuta od ponoci.` ;

console.log(`${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}`);

let dolari = 118;
let euri = 264;

let kursEuri = 117.15;
let kursDolari = 106.5;

console.log(`Euri u dinari ${Math.round(euri * kursEuri).toFixed(2)}`);
console.log(`Dolari u dinari ${Math.round(dolari * kursDolari).toFixed(2)}`);
console.log(`Dolari u euri ${((dolari * kursDolari)/ kursEuri).toFixed(2)}`);
console.log(`Euri u dolari ${((euri * kursEuri)/ kursDolari).toFixed(2)}`);