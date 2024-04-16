

let x = 12;

for(  i = 1; i < x; i++){
    console.log(`Vrednost promenjve i ${i}`);
}

let datum = new Date();
let godina = datum.getFullYear();
let godRodjenja = 2006;
let mesecRodjenja = 3;

if ( (godina - godRodjenja) > 18 ){
    document.write("<img src='download.jpg'></>");
}else if ((godina - godRodjenja) == 18){
    let mesec =  datum.getMonth() +1 ;
    if ( mesec > mesecRodjenja){
        document.write("<img src='download.jpg'></>");
    }else if (mesec == mesecRodjenja){
        document.write("<p>POstaje punoletna negde tokom ovog meseca</p>");

    }else{
        document.write(`<p>Osoba je maloletna postaje punoletna za ${mesecRodjenja - mesec}  mesec</p>`);
    }

}else{
    document.write("<p>osoba je maloletna</p>");
    let ostalo = 18 - (godina - godRodjenja);

    document.write(`Do punoletstva ostalo ${ostalo} godina`);

}
let t = 1;
let paragraf = document.getElementById("temp");
if ( t > 0){
    console.log(`Temperatura je u plusu`);
  
    paragraf.innerHTML= "Temperatura je u plusu";
    paragraf.style.color = "red";
    //style opcija u jsu ima sve opcije koje imamo u cssu
    //inerHTML prikladno jer mozemo da dodajemo sa celim HTML tagovima
}else{
    console.log(`Temperatura je u minusu`);
    
    paragraf.innerHTML=("Temperatura je u minusu");
    paragraf.style.color = "blue";

}

//radno vreme je od 9-17 preuzeti vreme sa racunara i ispitati da li firma radi

 let vreme = datum.getHours();
let dan = datum.getDay();
console.log(dan);
console.log(vreme);
let div1 = document.getElementById("div1");

if ( dan > 5 || dan < 1 ){
    div1.innerHTML = "<p>Firma zatvorena</p>";
    div1.style.color= "red";
}else if (vreme < 9 || vreme >= 17 ){
    div1.innerHTML = "<p>Firma zatvorena</p>";
    div1.style.color= "red";

}else{
    div1.innerHTML = "<p>Firma otvorena</p>";
    div1.style.color= "green";

}


let div2 = document.getElementById("div2");

let p1 = 19;
let k1 = 20;

let p2 = 12;
let k2 = 18;

if ( p1 > k2 || p2 > k1 ){
    div2.innerHTML = "<p>Smene se ne preklapaju</p>";
}else{
    div2.innerHTML = "<p>Smene se  preklapaju</p>";
}

// uneti dva datuma ispisati koji je raniji

let g1 = 1991;
let m1 = 5;
let d1 = 26;

let g2 = 1991;
let m2 = 5;
let d2 = 26;

if ( g1 < g2 ){
    console.log(`${d1}/${m1}/${g1} je raniji od ${d2}/${m2}/${g2}`);
}else if ( g1 > g2){
    console.log(`${d2}/${m2}/${g2} je raniji od ${d1}/${m1}/${g1}`);
}else{
    if (m1 < m2){
        console.log(`${d1}/${m1}/${g1} je raniji od ${d2}/${m2}/${g2}`);
    }else if (m1 > m2){
        console.log(`${d2}/${m2}/${g2} je raniji od ${d1}/${m1}/${g1}`);
    }else if (m1 == m2){
        if (d1 < d2){
            console.log(`${d1}/${m1}/${g1} je raniji od ${d2}/${m2}/${g2}`);
        }else if (d1 > d2){
            console.log(`${d2}/${m2}/${g2} je raniji od ${d1}/${m1}/${g1}`);
        }else {
            console.log(`Datumi su jednaki`);
        }
    }
}

let tempVazduha = 55;

if ( tempVazduha > 40 || tempVazduha < -15 ){
    let div3 = document.getElementById("div3");
    div3.innerHTML = "<p>Extremna temperatura</p>";

    div3.style.color = "red";
}

//radno vreme 9-20h radnim danima
//10 -18 vikendom
// console.log( dan );
let zatvoreno ;
if ( vreme < 9 || vreme >= 20 ){
    zatvoreno = true;
}else if ( dan < 1 && dan > 5 ){
    if ( vreme < 10 || vreme >= 18){
        zatvoreno = true;
    }else{
        zatvoreno = false;
    }
}else{
    zatvoreno = false;

}
let poruka;
if ( zatvoreno == false ){
    poruka = "<p>Butik otvoren</p>";
}else{
    poruka = "<p>Butik zatvoren</p>";

}

document.getElementById("div4").innerHTML = poruka;

let b1 = 6;
let b2 = -5;
let b3 = 15;

let najveci = b1;
if ( b2 > najveci ){
    najveci = b2;
}
if ( b3 > najveci ){
    najveci = b3;
}
// let p = document.createElement("p");
// p.innerHTML = `Najveci broj je ${najveci}`;

// document.getElementById("div4").append(p);

// let i = 0;
i = 0;
while ( i <= 5){
    console.log(i++);//moze i ovako ispise pa uveca.
    // i++;
}

let n = 13;
i = 1;

let boje = ["red","blue","green"];
y = 0;
while ( i <= n ){
     let p = document.createElement("p");
     p.innerHTML = "Paragraf";
     p.style.color = boje[y];
     document.getElementById("div4").append(p);

  

     y++;
     if ( y > 2){
         y = 0;
     }
    //  document.body.innerHTML += `<p>Paragraf broj ${i} </p>`;

    i++;

}
// document.body.innerHTML = `<p>Paragraf broj ${i} </p>`;