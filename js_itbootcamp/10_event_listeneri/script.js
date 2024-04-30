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
    let btnHello = document.getElementById('hello');
    let pBtnHello = document.getElementById('btnHelloPar');
    let btnAdd = document.getElementById('btnAdd');
    let btnReduce = document.getElementById('btnReduce');
    let pCount = document.getElementById('count');
    
   
    let br = 0;
    pCount.innerHTML = br ;
    
    console.log(button);
    button.addEventListener('click', ()=>{//dblclick na dupli klik
        let p = document.querySelector('p');
        p.innerHTML = "dugme je kliknuto";
    });

    btnHello.addEventListener("click", () =>{
        pBtnHello.innerHTML = "Hello";
    });

    btnAdd.addEventListener('click', ()=>{
        br++;
        pCount.innerHTML = br;
    });
    btnReduce.addEventListener('click', ()=>{
        br--;
        if ( br < 0 ){
            pCount.innerHTML = 0;
            br = 0;
        }else{
            pCount.innerHTML = br;

        }
    });

    //Napraviti iput polje i dugme.
    //U i polje uneti ime osobe a u p da se ispise ydravo i ime osobe

    let inputPolje = document.getElementById("imeOsobe");
    let btnIspisiTekst = document.getElementById('ispisiTekst');
    let pIspisTeksta = document.getElementById('ispisTeksta');


    btnIspisiTekst.addEventListener('click',()=>{
        let preuzmiTekst = inputPolje.value;
        pIspisTeksta.innerHTML = "hello " + preuzmiTekst;
    });

    //Napraviti niz od tri imena Proci nizom i ispisati imena.
        //Svako u novom linku Ako ime pocinje sa S linkse otvara u novom tabu
        //U listi kao stavke liste naizmenicno obojiti sa dve raylicite boje
        //U jednoj koloni tabele postaviti okvir marginu i pading celijama tabele

        //Navigacija kroz dom stablo
        //parentNode - roditeljski cvor.
            //Svaki element u DOM stablu ima tacno jedan parent node
        //childNodes[nodenumber] -direktni potomak sa zadatim indeksom
        //firstChild - prvi direktnin potomak
        //lastChild -poslednji direktni potomak
        //nextSibling  - naredni 
        //previousSibling - predhodni brat element


    console.log(pBtnHello.parentNode);
    console.log(pBtnHello.parentElement);
    let div1 = pBtnHello.parentNode;

    console.log(div1.childNodes[1]);
    console.log(div1.firstChild);
    console.log(div1.lastChild);
    // console.log(div1.parentNode.parentNode.parentNode);

    div1.childNodes.forEach( e =>{
        let tip = e.nodeName;
        if ( tip != "#text"){
            console.log(e);
        }
    })

    //MEnjanje klasa elementima

        //element.classList - lista klasa koje element poseduje
        
    //metode

        //element.classListAdd("class") - dodavanje klase
        //element.classListRemove("class") -brisanje odredjene klase
        //element.classList.toggle Ako element ne poseduje odredjenu klasu dodaje je u suprotnom je brise
        //element.classList.contains("class") ispisuje da li element ima odredjenu klasu