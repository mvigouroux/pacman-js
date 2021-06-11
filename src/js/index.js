import '../style/style.scss';

//classes
import {PacMan} from './class/pacman.js';
import {Ghost} from './class/ghost.js';

//variables
import {
    widthFloor,
    heightFloor,
    wallsInfos,
    foodWidth, 
    foodHeight, 
    foodColor, 
    foodsPosition,
} from './components/constants.js'

//component
import { displayMenu } from './components/menu.js'

const root = document.getElementById('root');
console.log('root');


// create elements
const screen = document.createElement('div');
screen.setAttribute('id', 'screen');
console.log('screen');

const gameFloor = document.createElement('div');
gameFloor.setAttribute('id', 'gameFloor');
gameFloor.style.width = `${widthFloor}px`;
gameFloor.style.height = `${heightFloor}px`;
console.log('gamefloor');

//inject elements on root
screen.appendChild(gameFloor);
root.appendChild(screen);

displayMenu();

const menu = document.getElementById('menu');
const btnMenu = document.querySelectorAll('.btn');

console.log(parseInt(document.getElementById('Easy').value));

document.addEventListener('click', (e)=>{
  let choosenLevel = e.target.id;
  let level = 100000;
  
  switch (choosenLevel) {
    case 'Easy':
      level = parseInt(document.getElementById('Easy').value);
      console.log(level);
      menu.style.display = 'block';
      menu.style.display = 'none';
      launchGame(level);
      break;
    case 'Medium':
      level = parseInt(document.getElementById('Medium').value);
      menu.style.display = 'block';
      menu.style.display = 'none';
      launchGame(level);
      break;
    case 'Hard':
      level = parseInt(document.getElementById('Hard').value);
      menu.style.display = 'block';
      menu.style.display = 'none';
      launchGame(level);
      break;
    case 'Impossible':
      level = parseInt(document.getElementById('Impossible').value);
      menu.style.display = 'block';
      menu.style.display = 'none';
      launchGame(level);
      break;
    default:
      launchGame(level);
      break;
  }
})


function launchGame(level) {

  // initializing game elements
  const pacMan = new PacMan(350, 50, wallsInfos, foodsPosition);

  // Create Ghost
  let intervalGhostId = null;

  function generateGhosts() {
    const ghost1 = new Ghost(350, 350, wallsInfos, pacMan);
    gameFloor.appendChild(ghost1.getGhost());
    intervalGhostId = setInterval(() => {
      gameFloor.appendChild(new Ghost(350, 350, wallsInfos, pacMan).getGhost());
    }, level);
  }

  // Create Food
  const foods = foodsPosition.map((p, i) => {
    const f = document.createElement('div');
    f.setAttribute('id', p.id);
    f.style.width = `${foodWidth}px`;
    f.style.height = `${foodHeight}px`;
    f.style.backgroundColor = foodColor;
    f.style.position = "absolute";
    f.style.top = `${p.top}px`;
    f.style.left = `${p.left}px`;
    return f;
  });

  // Create walls
  const walls = wallsInfos.map((wall, i) => {
    const w = document.createElement('div');
    w.setAttribute('id', `wall-${i}`);
    w.setAttribute('class', 'wall');

    w.style.width = `${wall.width}px`;
    w.style.height = `${wall.height}px`;
    w.style.top = `${wall.top}px`;
    w.style.left = `${wall.left}px`;
    return w;
  });


  // we inject the element on gameFloor
  walls.forEach(wall => gameFloor.appendChild(wall));
  foods.forEach(food => gameFloor.appendChild(food));
  gameFloor.appendChild(pacMan.getPacMan());


  // We create the ghosts
  generateGhosts();
}



