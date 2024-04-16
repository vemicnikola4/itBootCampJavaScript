//DOM Manipulation


//Styling elements
// const title = document.getElementById('main-heading');
// console.log(title);

// title.style.color='red';
//inline stiling

const listItems= document.querySelectorAll('.list-items');



//Creating elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

//adding ellements

ul.append(li);
// The Element.append() method inserts a set of Node objects or string objects after the last child of the Elemen



for ( let i = 0;  i < listItems.length; i++){
    listItems[i].style.fontSize = '2rem';

}

//Modifying the text
// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

li.innerText = "X-MEN";

//Modifying attribute and classes
li.setAttribute('class','list-items');
li.setAttribute('class','movie-item');

const title= document.querySelector('#main-heading');

console.log(title.getAttribute('id'));
const liClass = li.getAttribute('class');
console.log(liClass);

// li.classList.add('list-items');
//The classList property returns the CSS classnames of an element.

// li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));

//REMOVE ELEMENTS

li.remove();