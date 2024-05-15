import generateImage from "./general.js";
// import default nema potrebe za 
// import { generateImage } from "./general.js";
// kreiramo sliku uz pomoc funkcije iz modula general.js


let generateList = parent => {
    let ul = document.createElement("ul");
    ul.style.listStyle = "none";
    parent.append(ul);
    return ul;
}
let generateListItem = (parent, src) => {
    let li = document.createElement("li");
    parent.append(li);
    let img = generateImage(src);
    li.append(img);
    return li;
}

export{
    generateList, generateListItem
};