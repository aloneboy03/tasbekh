'use strict';

let body = document.querySelector('body');
let numBox = document.querySelector('.num');
let topText = document.querySelector('.top--text');
let numText = document.querySelector('.num');
let resetBtn = document.querySelector('.restart');
let modLight = document.querySelector('.mod--light');

let num = 0;

// numText

numBox.addEventListener('click', () => {
    num = num + 1;
    numText.textContent = num;
})


// background color

modLight.addEventListener('click', function(e){
    if(body.style.backgroundColor !== 'white'){
        body.style.backgroundColor = "white";
        body.style.transition = '0.5s';
        topText.style.color = "#222";
        topText.style.transition = '0.5s';
        numText.style.color = "#222";
        numText.style.transition = '0.5s';
    }
    else{
        body.style.backgroundColor = "#222";
        body.style.transition = '0.5s';
        topText.style.color = "#fff";
        topText.style.transition = '0.5s';
        numText.style.color = "#fff";
        numText.style.transition = '0.5s';
    }
})

// Restart button

resetBtn.addEventListener('click', () => {
    num = 0;
    numText.textContent = num;
})

// modLight Button
let roteteBtn = document.querySelector('.mod--light');
let modlight = document.querySelector('.reset');

modLight.addEventListener('click', () => {

    // modLight.innerHTML = `
    //         <i class="fa-solid fa-sun"></i>
    // `;

    
        if(!roteteBtn.classList.contains('mod')){
            roteteBtn.classList.add('mod');
            modLight.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        }
        else{
            roteteBtn.classList.remove('mod');
            modLight.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        }
        modlight.push(modLight);
})