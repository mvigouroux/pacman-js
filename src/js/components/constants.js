// General constants
const widthFloor = 700;
const heightFloor = 700;
const step = 5;
const angleDirection = {
    ArrowUp: -90,
    ArrowDown: 90,
    ArrowLeft: 180,
    ArrowRight: 0,
};
const directions = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

// Obstacles
const wallsInfos = [
    {width: 650, height: 30, left: 15, top:20},
    {width: 650, height: 30, left: 15, top:650},
    {width: 30, height: 300, left: 15, top:20},
    {width: 30, height: 250, left: 15, top:430},
    {width: 30, height: 300, left: 650, top:20},
    {width: 30, height: 250, left: 650, top:430},
    {width: 70, height: 180, left: 130, top: 260},
    {width: 70, height: 180, left: 480, top: 260},
    {width: 100, height: 70, left: 120, top: 520},
    {width: 100, height: 70, left: 460, top: 520},
    {width: 100, height: 20, left: 290, top: 570},
    {width: 100, height: 70, left: 120, top: 110},
    {width: 100, height: 70, left: 460, top: 110},
    {width: 100, height: 20, left: 290, top: 110},
    {width: 10, height: 178, left: 270, top: 260},
    {width: 10, height: 178, left: 400, top: 260},
];
const wallDistance = 2;

//Pacman
const sizePacman = 50;

//Ghosts
const stepGhost = 5;
const heightGhost = 40;
const widthGhost = 35;
const ghostLimitStraightLine = 100;
const colorsGhost = ['cyan', '#f5b041', '#e74c3c', '#e8daef'];
let intervalGhostId = null;

// Food 
const foodWidth = 10;
const foodHeight = 10;
const foodColor =  "#f3f1d6";
const foodsPosition = [
  {top: 70, left: 80, id: 1},
  {top: 110, left: 80, id: 2},
  {top: 150, left: 80, id: 3},
  {top: 190, left: 80, id: 4},
  {top: 230, left: 80, id: 5},
  {top: 270, left: 80, id: 6},
  {top: 310, left: 80, id: 7},
  {top: 350, left: 80, id: 8},
  {top: 390, left: 80, id: 9},
  {top: 430, left: 80, id: 10},
  {top: 470, left: 80, id: 11},
  {top: 510, left: 80, id: 12},
  {top: 550, left: 80, id: 13},
  {top: 590, left: 80, id: 14},
  {top: 615, left: 80, id: 15},

  {top: 615, left: 120, id: 16},
  {top: 615, left: 160, id: 17},
  {top: 615, left: 200, id: 18},
  {top: 615, left: 240, id: 19},
  {top: 615, left: 280, id: 20},
  {top: 615, left: 320, id: 21},
  {top: 615, left: 360, id: 22},
  {top: 615, left: 400, id: 23},
  {top: 615, left: 440, id: 24},
  {top: 615, left: 480, id: 25},
  {top: 615, left: 520, id: 26},
  {top: 615, left: 560, id: 27},

  {top: 615, left: 610, id: 28},
  {top: 590, left: 610, id: 29},
  {top: 550, left: 610, id: 30},
  {top: 510, left: 610, id: 31},
  {top: 470, left: 610, id: 32},
  {top: 430, left: 610, id: 33},
  {top: 390, left: 610, id: 34},
  {top: 350, left: 610, id: 35},
  {top: 310, left: 610, id: 36},
  {top: 270, left: 610, id: 37},
  {top: 230, left: 610, id: 38},
  {top: 190, left: 610, id: 39},
  {top: 150, left: 610, id: 40},
  {top: 110, left: 610, id: 41},
  {top: 70, left: 610, id: 42},

  {top: 70, left: 120, id: 43},
  {top: 70, left: 160, id: 44},
  {top: 70, left: 200, id: 45},
  {top: 70, left: 240, id: 46},
  {top: 70, left: 280, id: 47},
  {top: 70, left: 320, id: 48},
  {top: 70, left: 360, id: 49},
  {top: 70, left: 400, id: 50},
  {top: 70, left: 440, id: 51},
  {top: 70, left: 480, id: 52},
  {top: 70, left: 520, id: 53},
  {top: 70, left: 560, id: 54},

  {top: 215, left: 120, id: 55},
  {top: 215, left: 160, id: 56},
  {top: 215, left: 200, id: 57},
  {top: 215, left: 240, id: 58},
  {top: 215, left: 280, id: 59},
  {top: 215, left: 320, id: 60},
  {top: 215, left: 360, id: 61},
  {top: 215, left: 400, id: 62},
  {top: 215, left: 440, id: 63},
  {top: 215, left: 480, id: 64},
  {top: 215, left: 520, id: 65},
  {top: 215, left: 560, id: 66},

  {top: 475, left: 120, id: 67},
  {top: 475, left: 160, id: 68},
  {top: 475, left: 200, id: 69},
  {top: 475, left: 240, id: 70},
  {top: 475, left: 280, id: 71},
  {top: 475, left: 320, id: 72},
  {top: 475, left: 360, id: 73},
  {top: 475, left: 400, id: 74},
  {top: 475, left: 440, id: 75},
  {top: 475, left: 480, id: 76},
  {top: 475, left: 520, id: 77},
  {top: 475, left: 560, id: 78},

  {top: 430, left: 440, id: 79},
  {top: 390, left: 440, id: 80},
  {top: 350, left: 440, id: 81},
  {top: 310, left: 440, id: 82},
  {top: 270, left: 440, id: 83},
  
  {top: 430, left: 230, id: 84},
  {top: 390, left: 230, id: 85},
  {top: 350, left: 230, id: 86},
  {top: 310, left: 230, id: 87},
  {top: 270, left: 230, id: 88},
];
const maxFood = 88;
const foodAte = [];


export {
    widthFloor,
    heightFloor,
    step,
    angleDirection,
    directions,
    wallsInfos,
    wallDistance,
    sizePacman,
    stepGhost,
    heightGhost,
    widthGhost,
    ghostLimitStraightLine,
    intervalGhostId,
    colorsGhost,
    foodWidth, 
    foodHeight, 
    foodColor, 
    foodsPosition,
    maxFood,
    foodAte,
};