//u jsu u nizu mogu biti razliciti tipovi podataka

let razno = [1,0.25,"hello",[0,1,3]];

razno[4]= [4,5,6];
//kada dodajemo u niz moramo da imenujemo index e moze da ga automatski doda na kraj kao u phpu;
console.log(razno.length);

razno[razno.length]="Nikola vemic";
console.log(razno);

for ( let i = 0; i < razno.length; i++){
    console.log( razno[i]);
}
let brojevi = [2,22,54,17];

for (let i = 0; i < brojevi.length; i++ ){
    brojevi[i]+= brojevi[i]*0.1;
console.log(brojevi[i]);

}
