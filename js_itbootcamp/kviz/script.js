// <h6></h6>
// <div class="custom-control custom-radio">
//     <input type="radio" id="nacinPlacanja2" name="nacinPlacanja" value="kes" class="custom-control-input" checked>
//     <label class="custom-control-label" for="nacinPlacanja2">Keš</label>
//   </div>
// <div class="custom-control custom-radio">
//     <input type="radio" id="nacinPlacanja1" name="nacinPlacanja" value="kartica" class="custom-control-input">
//     <label class="custom-control-label" for="nacinPlacanja1">Kartica</label>
//   </div>

let funkcija = (nizObjekata)=>{

    let forma = document.getElementsByTagName("form");
    let ponudjenOdgovor = 1;

    for ( let i = 0; i < nizObjekata.length;i++){
        let divFormGroup = document.querySelector("form div.form-group");
        let pitanjeH6 = document.createElement("h6");
        pitanjeH6.innerHTML=nizObjekata[i].title;
        divFormGroup.append(pitanjeH6);
        let radioDiv;
        for ( let j = 0; j < nizObjekata[i].ponudjeniOdgovori.length; j++ ){
            radioDiv = document.createElement("div");
            radioDiv.classList.add("form-check");

            let label = document.createElement("label");
            label.classList.add("form-check-label");
            label.setAttribute("for",`ponudjeniOdgorvor${ponudjenOdgovor}`);
            label.innerHTML =  nizObjekata[i].ponudjeniOdgovori[j];

            let input = document.createElement("input");
            input.type ="radio";
            input.name =nizObjekata[i].title.replace(/\s/g, "");
            input.id ="ponudjeniOdgorvor" + ponudjenOdgovor;
            input.value =nizObjekata[i].ponudjeniOdgovori[j].replace(/\s/g, "");
            input.classList.add("form-check-input");

            radioDiv.append(input);
            radioDiv.append(label);
            ponudjenOdgovor++;
            divFormGroup.append(radioDiv);


        }

    }
    // console.log(forma);
    
    
}

// console.log(radioLabel);
// console.log(radioDiv);
// forma



let pitanja = [
    ["Glavni grad Slovacke?",["Bukurest","Kijev","Moskva","Bratislava","Beograd"],3],
    ["Koje godine se odigrala Maricka bitka?",["1366","1299","1371","1389","1401"],2],
    ["Koja reka protice nadomak Bele Crkve i kod Stare Palanke se uliva u Dunav?",["Nera","Karas","Begej","Beusnica","Kolubara"],0],
    ["Koji moreuy raydvaja Liverpul od Dablina?",["Dablinski","Irski","Skocki","Severno Irski","Liverpuski "],2],
    ["Skog ostrva u Mediteranu je Oliveer Dragojevic?",["Korcula","Hvar","Brac","Krk","Lastovo"],0],
    ["U kom gradu se odigrava Australijan Open?",["Kambera","Sidnej","Melburn","Tokio","Johaneyburg"],2]
];

class pitanjaZaKviz{
    constructor(title,ponudjeniOdgovori,indexTacnogOdgovora){
        this.title = title;
        this.ponudjeniOdgovori = ponudjeniOdgovori;
        this.indexTacnogOdgovora = indexTacnogOdgovora;
    }
}
let pitanjaZaKvizNiz = [];
for ( let i = 0; i < pitanja.length;i++){
    pitanjaZaKvizNiz.push(new pitanjaZaKviz(pitanja[i][0],pitanja[i][1],pitanja[i][2]));
}
funkcija(pitanjaZaKvizNiz);

let btnSubmit = document.getElementById("submitFormKviz");
console.log(btnSubmit);
// console.log(pitanjaZaKvizNiz);
// console.log(pitanjaZaKvizNiz[0]);
// let pitanje1 = pitanjaZaKvizNiz[0];
// let divFormGroup = document.querySelector("form div.form-group");
// let pitanjeH6 = document.createElement("h6");
// pitanjeH6.innerHTML=pitanje1.title;

// let radioDiv = document.createElement("div");
// radioDiv.classList.add("form-group");
// radioDiv.append(pitanjeH6);



// let label = document.createElement("label");
// label.classList.add("form-check-label");
// label.setAttribute("for","input");
// label.innerHTML = "BEograd";

// let input = document.createElement("input");
// input.type ="radio";
// input.name ="odgovor0";
// input.id ="input";
// input.value ="beograd";
// input.classList.add("form-check-input");

// let label2 = document.createElement("label");
// label2.classList.add("form-check-label");
// label2.setAttribute("for","input2");
// label2.innerHTML = "Varsava";

// let input2 = document.createElement("input");
// input2.type ="radio";
// input2.name ="odgovor0";
// input2.id ="input2";
// input2.value ="varsava";
// input2.classList.add("form-check-input");


// let divFormCheck = document.createElement("div");
// divFormCheck.classList.add("form-check");
// let divFormCheck2 = document.createElement("div");
// divFormCheck2.classList.add("form-check");

// divFormCheck.append(input);
// divFormCheck.append(label);

// divFormCheck2.append(input2);
// divFormCheck2.append(label2);
// divFormGroup.append(divFormCheck,divFormCheck2);
