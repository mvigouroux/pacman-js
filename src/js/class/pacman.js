import {Character} from './character.js';
import {
    heightFloor,
    step,
    angleDirection,
    directions,
    sizePacman,
    foodWidth, 
    foodHeight, 
    maxFood,
    foodAte
} from '../components/constants.js';

import { Victory } from '../components/victory.js'

class PacMan extends Character {
    constructor (originalX, originalY, wallsInfo, foods) {
      const _super = super(originalX, originalY, wallsInfo);
      this._super = _super;
      this.foodsInfo = foods;
      this.countFoods = 0;
      // Pac Body
      this.pac = document.createElement('div');
      this.pac.setAttribute('id', 'pacman');
      this.pac.style.width = `${sizePacman}px`;
      this.pac.style.height = `${sizePacman}px`;
      this.pac.style.left = `${this.posX - 25}px`;
      this.pac.style.bottom = `${this.posY}px`;
      // Pac Mouth
      const mouth = document.createElement('div');
      mouth.setAttribute('class', 'pacMouth');

      this.pac.appendChild(mouth);
      this.initialization(this);
    }
  
    initialization = (_self) => {
      document.addEventListener('keydown', function(event) {
        if (directions.includes(event.key)){
          _self._super.handleMove(event.key, step)
          _self.updatePosition();
        }
      });
    }
  
    getPacMan = () => this.pac;
  
    getCountFood = () => this.countFoods;
  
    eatFood = () => {
      this.foodsInfo.forEach((f, i) => {
        // // We check if pac eat food vertically
        if (Math.abs((heightFloor - f.top + foodHeight) - this.posY) <= 3 ||
            Math.abs(this.posY + sizePacman - (heightFloor - f.top)) <= 3) {
          // We check if pacman is align with food laterally
          if(Math.abs(this.posX - f.left) < 10) {
            const foodEl = document.getElementById(f.id);
            if (foodEl) {
              foodEl.style.display = 'none';
              if (!foodAte.includes(f.id)) {
                this.countFoods += 1;
                foodAte.push(f.id);
              }
              if (this.countFoods === maxFood) {
                Victory();
              }
            }
          }
        }
  
        // We check if pac eat food laterally
        if (Math.abs(this.posX + sizePacman - f.left) <= 3 ||
            Math.abs(f.left + foodWidth - this.posX) <= 3) {
          // We check if pacman is align with food vertically
          if(Math.abs(this.posY - (heightFloor - f.top)) <= 40) {
            const foodEl = document.getElementById(f.id);
            if (foodEl) {
              foodEl.style.display = 'none';
              if (!foodAte.includes(f.id)) {
                this.countFoods += 1;
                foodAte.push(f.id);
              }
              if (this.countFoods === maxFood) {
                Victory();
              }
            }
          }
        }
  
      });
    }
  
    updatePosition = () => {
      this.pac.style.transform = `rotate(${angleDirection[this.direction]}deg)`;
      this.pac.style.left = `${this.posX - 25}px`;
      this.pac.style.bottom = `${this.posY}px`;
      this.eatFood();
    }
}

export {PacMan};