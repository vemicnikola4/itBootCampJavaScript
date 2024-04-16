//Ispis u JSu

    //window.alert()
    //document.write() - ispis celog dokumenta
    //console.log() - ispis u konzoli
    //innerHTML - menjanje sadrzaja nekoh HTML elementa

    console.log("HEllo World");
    document.getElementById("h1").innerText = "Naslov promenjen iz JSa";

    document.getElementById("p1").innerHTML = "Paragraf iz Jsa";
    
    document.getElementById("d1").innerHTML = "Nikola Vemic";

    // JS Vrednosti

    //Fiksne vrednosti literali
        // Brojevi
        // Stringovi
        // logicke true i false

        console.log("3"+"4"); //konkatenacija tj. spajanje stringova
        console.log(3+4);

        console.log("3"+"4 = " ,3+4 ); 
        console.log("3"+"4 = " + 3+4 ); 
        console.log("3"+"4 = " + (3+4) ); 
        console.log(true); 
        console.log(false); 

    //Promenjive varijable
        //prostor u memoriji gde je zapamcena neka vrednost
        //u JSu velika fleksibilnonst. Moze biti i prazna promenjiva
        //mora da se deklarise pre upotrebe
        // var ili let
        //let uvedena u novijoj verziji JSa
        //razlika je suptilna ali postoji

        //let x; //1) deklaracija promenjive. Uvodjenje promenjive u program.Kasnije dodelimo vrednost ili joj menjamo vrednost
        // let x = 3; // 2) deklaracija i dodela vrednosti u isto vreme
        // const x = 1 // 3) sa konstantom. Mora odmah da se dodeli vrednost i nema menjanja!
        let x = 3;
        console.log(x);
        x = "Nikola";
        console.log(x);

        //Primitivni tipovi podataka
            //Number
            //String
            //Boolean
            //Null promenjiva nema vrenost
            //Undifined promenjivoj nije definisana vrednost
    let age;
    console.log(age);//undivined
    console.log(age, age + 3);//NaN not a number. POkusavamo da saberemo broj sa nedefinisanom vrednoscu.
    age = null;
    console.log(age, age + 3);

 x = 6;

 console.log(x++);//postincrement prvo se iskoristi stara vrednost pa se uveca
 console.log(x);
 console.log(++x);//preincrement prvo se poveca pa se koristi
 console.log(x);

 console.log(Math.floor(28/12));
 console.log(Math.ceil(28/12));
 console.log(28 % 12);


