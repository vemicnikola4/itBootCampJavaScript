import generateImage from "./general.js";
//kod importa moramo da navedemo bas onako kako se naziva u originalnom modulu
//u jsu nudi se defoltni export. Kad modul ima jednu stavku.

let generateTable = parent => {
    let table = document.createElement("table");
    table.style.border = "3px solid red";
    parent.append(table);
    return table;
}
let generateTableRow = parent =>{
    let tr = document.createElement("tr");
    parent.append(tr);
    return tr;
}
let generateTableItem = (parent, src) => {
    let td = document.createElement("td");
    parent.append(td);
    let img = generateImage(src);
    td.append(img);
    return(td);
}

export{ generateTable, generateTableRow,generateTableItem};
//ako i imamo vise funkcija mozemo dve da exportujemo pa da jednu export default. 