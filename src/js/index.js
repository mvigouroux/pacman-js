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
    foodsPosition
} from './components/constants.js'

const root = document.getElementById('root');



// create elements
const screen = document.createElement('div');
screen.setAttribute('id', 'screen');

const gameFloor = document.createElement('div');
gameFloor.setAttribute('id', 'gameFloor');
gameFloor.style.width = `${widthFloor}px`;
gameFloor.style.height = `${heightFloor}px`;


// initializing game elements
const pacMan = new PacMan(350, 50, wallsInfos, foodsPosition);

// Create Ghost
function generateGhosts() {
  const ghost1 = new Ghost(350, 350, wallsInfos, pacMan);
  gameFloor.appendChild(ghost1.getGhost());
  intervalGhostId = setInterval(() => {
    gameFloor.appendChild(new Ghost(350, 350, wallsInfos, pacMan).getGhost());
  }, 10000);
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


// we inject the element on root
walls.forEach(wall => gameFloor.appendChild(wall));
foods.forEach(food => gameFloor.appendChild(food));
gameFloor.appendChild(pacMan.getPacMan());
screen.appendChild(gameFloor);
root.appendChild(screen);

// We create the ghosts
generateGhosts();
