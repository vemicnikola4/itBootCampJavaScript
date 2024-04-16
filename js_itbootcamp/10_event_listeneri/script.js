//Dogadjaji su pojave koje su najcesce rezultat
    //Klik nesto sto korisnik uradi
    //ili izazvane od strane brousera

    //Event listeneri
    //osluskivaci, stalno osluskuju element na koga su vezani i osluskuju da li se desio neki dogadjaj veyan za taj element
    //Even hendler => Nakon izvrsenog dogadjaja event listener poziva obradjivace dogadjaja koji se aktiviraju kao posledica nekog dogadjaja. 

    //Najcesci event je click event

    //Postupak dodavanjna click eventa
    //1. Dohvati elemant na koji yelite da se klikne
    // let dugme = document.querySelector('button');
    //2. Dodavanje event listenera elementu
    //dodajemo osluskivac koji aktivno osluskuje 
    //listener prima dva parametara 
    // dugme.addEventListener(event,funkcija); 

    let button = document.querySelector('button');
    console.log(button);
    button.addEventListener('click', ()=>{//dblclick na dupli klik
        let p = document.querySelector('p');
        p.innerHTML = "dugme je kliknuto";
    });

    let btnHello = document.getElementById('hello')