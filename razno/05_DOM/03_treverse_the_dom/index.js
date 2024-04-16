//DOM MANIPULATION

//Traverse a DOM

    //Parent Node Traversal

//let ul = document.querySelector('ul');//hvata prvi tag tog tipa u dokumentu

// console.log(ul.parentNode);
// console.log(ul.parentNode.parentNode);

// console.log(ul.parentElement);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);
//postoji razlika izmedju node i element i ako node moze biti i element.


    //Child Node Traversal

let ul = document.querySelector('ul');
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
console.log(ul.lastElementChild);

ul.childNodes[1].style.backgroundColor = "blue";
ul.lastElementChild.style.color = "red";

console.log(ul.children);

//ovde se vidi razlika izmedju nodes i elements nodes moze biti i tekst i element
// nodes in javascript explanation

    //Sibling Node Traversal

console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);