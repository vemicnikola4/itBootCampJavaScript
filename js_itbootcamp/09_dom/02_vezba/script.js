//Izaberi sve paragrafe i pridodati tekst vazno

let p = document.getElementsByTagName('p');
console.log(p);

for ( let i = 0; i < p.length; i++ ){
    p[i].innerHTML += " vazno";
}
let divsClassError = document.querySelectorAll('div.error');
console.log(divsClassError);


divsClassError.forEach( element => {
    let h = "<h1 style='color:red'> Greska!</h1>";
    element.innerHTML += h;
});
for ( let i = 0; i < p.length; i++ ){
    p[i].innerHTML = i**2 + " " + p[i].innerHTML ;
}


let imgs = document.querySelectorAll('img');
console.log(imgs);
let br = 1;

imgs.forEach( element =>{
    element.alt = 'slika ' + br;
    br++;
}); 


for ( let i = 0; i < p.length; i++ ){
    p[i].style.color = "purple" ;
    if ( i % 2 == 0 ){
        p[i].style.backgroundColor = "green" ;

    }else{
        p[i].style.backgroundColor = "red" ;

    }
}
//predavanje 22 nastavak event listeneri