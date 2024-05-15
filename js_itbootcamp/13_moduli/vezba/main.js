// import { generateList, generateListItem } from "./modules/list.js";
// import { generateTable,generateTableRow,generateTableItem as generatePicInTd } from "./modules/table.js";

// import * as List from  "./modules/list.js";  Bukvalno sve iz modula unutar jednog objekta
///dobra stvar je sto mozemo da imamo vise istoimenih funkcija u razlicitim modulima ali ne dolazi do problema jer ih pozivamo iz razlicitih objekata

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";


let ul  = List.generateList(document.body);
List.generateListItem(ul,"images/20201226_151235.jpg");
List.generateListItem(ul,"images/20201226_152018.jpg");
List.generateListItem(ul,"images/20210820_190418.jpg");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateTableItem(tr,"images/20201226_151235.jpg");
Table.generateTableItem(tr,"images/20201226_152018.jpg");
Table.generateTableItem(tr,"images/20210820_190418.jpg");
//potencijalni problem je ako u dva razlicita modula imamo dve razlicite funkcije sa istim imenom
//imamo dve opcije
    //1.Kod importa mozemo da izvrsimo preimenovanje kao u sql npr import { generateList, generateListItem as generateItem} ili sta god. 
        // Mozemo i kod exporta da radimo sa as. Napravimo fc pod jednim imenom a exportujemo ga pod drugim imenom
// let ul = generateList(document.body);
// generateListItem(ul,"images/20201226_151235.jpg");
// generateListItem(ul,"images/20201226_152018.jpg");
// generateListItem(ul,"images/20210820_190418.jpg");

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr,"images/20201226_151235.jpg");
// generateTableItem(tr,"images/20201226_152018.jpg");
// generateTableItem(tr,"images/20210820_190418.jpg");

// generatePicInTd(tr,"images/20201226_151235.jpg");
// generatePicInTd(tr,"images/20201226_152018.jpg");
// generatePicInTd(tr,"images/20210820_190418.jpg");