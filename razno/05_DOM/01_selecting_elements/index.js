//DOM Manipulation
// document je objekt a ovo su metode document objekta
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// document.querySelector
//vraca prvi element koji se podudara sa upitom. Ako imamo vise elemenata sa istom klasom vratice prvi

// document.querySelectorAll

const title = document.getElementById('main-heading');
console.log(title);

// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);
// vraca array

const listItems = document.getElementsByTagName('li');
console.log(listItems);

// document.querySelector
const container = document.querySelector('div');