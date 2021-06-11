import {widthFloor,heightFloor} from './constants.js'

function displayMenu() {
    console.log('menu')
    // const gameFloor = document.getElementById('gameFloor');
    // console.log(gameFloor);

    const nav = document.createElement('nav');
    nav.setAttribute('id', 'menu');
    nav.style.left = `${widthFloor/2 - 150}px`;
    nav.style.top = `${heightFloor/2 - 150}px`;
  

    const btnEasy = document.createElement('button');
    btnEasy.setAttribute('class','btn');
    btnEasy.setAttribute('id','Easy');
    btnEasy.setAttribute('value', 10000);
    btnEasy.innerHTML = "Easy";

    const btnMedium = document.createElement('button');
    btnMedium.setAttribute('class','btn');
    btnMedium.setAttribute('id','Medium');
    btnMedium.setAttribute('value', 5000);
    btnMedium.innerHTML = "Medium";

    const btnHard = document.createElement('button');
    btnHard.setAttribute('class','btn');
    btnHard.setAttribute('id','Hard');
    btnHard.setAttribute('value', 1000);
    btnHard.innerHTML = "Hard";

    const btnImpossible = document.createElement('button');
    btnImpossible.setAttribute('class','btn');
    btnImpossible.setAttribute('id','Impossible');
    btnImpossible.setAttribute('value', 500);
    btnImpossible.innerHTML = "Impossible";
  
    gameFloor.appendChild(nav);
    nav.appendChild(btnEasy);
    nav.appendChild(btnMedium);
    nav.appendChild(btnHard);
    nav.appendChild(btnImpossible);
}

export {displayMenu};