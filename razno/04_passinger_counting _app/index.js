//document.getElementById("count-el").innerText=5;

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;

// console.log(count);

// let myAge = 29;
// let humanDogRatio = 7;
// let dogAge = 2 * humanDogRatio;

// console.log(dogAge);
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

let count =document.getElementById("count-el").innerHTML;
const myDiv = document.getElementById('save-div');

// for (let i = 1; i <= 5; i++){
//     count++;
// }
// console.log(count);

function increment(){
    count++;
    document.getElementById("count-el").innerHTML = count;

}
function decrement(){
    count = count - 1;
    document.getElementById("count-el").innerHTML = count;

}
function reset(){
    count = 0;
    document.getElementById("count-el").innerHTML = count;

}

function createP(){
    
     // Replace 'yourDivId' with your actual div ID
    let paragraph = document.createElement('p');
    let btnDelete = document.createElement('button' );
    btnDelete.innerText= "DELETE";
    paragraph.append(btnDelete);
    paragraph.innerText = count;
    count = 0;
    myDiv.append(paragraph);
    myDiv.append(btnDelete);

}

// createP(value);