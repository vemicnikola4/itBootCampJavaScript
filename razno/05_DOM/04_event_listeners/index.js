//DOM manipulation

//Event Listeners
//nsjkoridceniji u javascriptu

//element.addEventListener("click",function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn(){
    alert('Also love js');
}
buttonTwo.addEventListener('click',alertBtn);

const newBcgrColor = document.querySelector('.box-3');

function changeBackgroundColor(){
    newBcgrColor.style.backgroundColor = 'blue';
}
newBcgrColor.addEventListener("mouseover",changeBackgroundColor);

    //reveal event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent(){
    if (hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    }else{
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener('click',revealContent);