/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar root = document.getElementById('root'); // General constants\n\nvar widthFloor = 700;\nvar heightFloor = 700;\nvar step = 5;\nvar stepGhost = 5;\nvar sizePacman = 50;\nvar heightGhost = 40;\nvar widthGhost = 35;\nvar wallDistance = 2;\nvar maxFood = 88;\nvar foodAte = [];\nvar intervalGhostId = null;\nvar angleDirection = {\n  ArrowUp: -90,\n  ArrowDown: 90,\n  ArrowLeft: 180,\n  ArrowRight: 0\n};\nvar directions = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];\nvar ghostLimitStraightLine = 100;\nvar colorsGhost = ['cyan', '#f5b041', '#e74c3c', '#e8daef'];\nvar animMouth = \" @keyframes eat {\\\n  0% {\\\n    clip-path: polygon(100% 74%, 44% 48%, 100% 21%);\\\n  }\\\n  25% {\\\n    clip-path: polygon(100% 60%, 44% 48%, 100% 40%);\\\n  }\\\n  50% {\\\n    clip-path: polygon(100% 50%, 44% 48%, 100% 50%);\\\n  }\\\n  75% {\\\n    clip-path: polygon(100% 59%, 44% 48%, 100% 35%);\\\n  }\\\n  100% {\\\n    clip-path: polygon(100% 74%, 44% 48%, 100% 21%);\\\n  }\\\n}\\\n\";\nvar s = document.createElement('style');\ns.innerHTML = animMouth;\nroot.appendChild(s); // create elements\n\nvar screen = document.createElement('div');\nscreen.setAttribute('id', 'screen');\nscreen.style.display = 'flex';\nscreen.style.justifyContent = 'center';\nscreen.style.alignItems = 'center';\nscreen.style.width = '100%';\nscreen.style.height = '95vh';\nvar gameFloor = document.createElement('div');\ngameFloor.setAttribute('id', 'gameFloor');\ngameFloor.style.width = \"\".concat(widthFloor, \"px\");\ngameFloor.style.height = \"\".concat(heightFloor, \"px\");\ngameFloor.style.border = 'blue 1px solid';\ngameFloor.style.position = 'relative';\ngameFloor.style.backgroundColor = \"black\"; // Obstacles\n\nvar wallsInfos = [{\n  width: 650,\n  height: 30,\n  left: 15,\n  top: 20\n}, {\n  width: 650,\n  height: 30,\n  left: 15,\n  top: 650\n}, {\n  width: 30,\n  height: 300,\n  left: 15,\n  top: 20\n}, {\n  width: 30,\n  height: 250,\n  left: 15,\n  top: 430\n}, {\n  width: 30,\n  height: 300,\n  left: 650,\n  top: 20\n}, {\n  width: 30,\n  height: 250,\n  left: 650,\n  top: 430\n}, {\n  width: 70,\n  height: 180,\n  left: 130,\n  top: 260\n}, {\n  width: 70,\n  height: 180,\n  left: 480,\n  top: 260\n}, {\n  width: 100,\n  height: 70,\n  left: 120,\n  top: 520\n}, {\n  width: 100,\n  height: 70,\n  left: 460,\n  top: 520\n}, {\n  width: 100,\n  height: 20,\n  left: 290,\n  top: 570\n}, {\n  width: 100,\n  height: 70,\n  left: 120,\n  top: 110\n}, {\n  width: 100,\n  height: 70,\n  left: 460,\n  top: 110\n}, {\n  width: 100,\n  height: 20,\n  left: 290,\n  top: 110\n}, {\n  width: 10,\n  height: 178,\n  left: 270,\n  top: 260\n}, {\n  width: 10,\n  height: 178,\n  left: 400,\n  top: 260\n}]; // Food \n\nvar foodWidth = 10;\nvar foodHeight = 10;\nvar foodColor = \"#f3f1d6\";\nvar foodsPosition = [{\n  top: 70,\n  left: 80,\n  id: 1\n}, {\n  top: 110,\n  left: 80,\n  id: 2\n}, {\n  top: 150,\n  left: 80,\n  id: 3\n}, {\n  top: 190,\n  left: 80,\n  id: 4\n}, {\n  top: 230,\n  left: 80,\n  id: 5\n}, {\n  top: 270,\n  left: 80,\n  id: 6\n}, {\n  top: 310,\n  left: 80,\n  id: 7\n}, {\n  top: 350,\n  left: 80,\n  id: 8\n}, {\n  top: 390,\n  left: 80,\n  id: 9\n}, {\n  top: 430,\n  left: 80,\n  id: 10\n}, {\n  top: 470,\n  left: 80,\n  id: 11\n}, {\n  top: 510,\n  left: 80,\n  id: 12\n}, {\n  top: 550,\n  left: 80,\n  id: 13\n}, {\n  top: 590,\n  left: 80,\n  id: 14\n}, {\n  top: 615,\n  left: 80,\n  id: 15\n}, {\n  top: 615,\n  left: 120,\n  id: 16\n}, {\n  top: 615,\n  left: 160,\n  id: 17\n}, {\n  top: 615,\n  left: 200,\n  id: 18\n}, {\n  top: 615,\n  left: 240,\n  id: 19\n}, {\n  top: 615,\n  left: 280,\n  id: 20\n}, {\n  top: 615,\n  left: 320,\n  id: 21\n}, {\n  top: 615,\n  left: 360,\n  id: 22\n}, {\n  top: 615,\n  left: 400,\n  id: 23\n}, {\n  top: 615,\n  left: 440,\n  id: 24\n}, {\n  top: 615,\n  left: 480,\n  id: 25\n}, {\n  top: 615,\n  left: 520,\n  id: 26\n}, {\n  top: 615,\n  left: 560,\n  id: 27\n}, {\n  top: 615,\n  left: 610,\n  id: 28\n}, {\n  top: 590,\n  left: 610,\n  id: 29\n}, {\n  top: 550,\n  left: 610,\n  id: 30\n}, {\n  top: 510,\n  left: 610,\n  id: 31\n}, {\n  top: 470,\n  left: 610,\n  id: 32\n}, {\n  top: 430,\n  left: 610,\n  id: 33\n}, {\n  top: 390,\n  left: 610,\n  id: 34\n}, {\n  top: 350,\n  left: 610,\n  id: 35\n}, {\n  top: 310,\n  left: 610,\n  id: 36\n}, {\n  top: 270,\n  left: 610,\n  id: 37\n}, {\n  top: 230,\n  left: 610,\n  id: 38\n}, {\n  top: 190,\n  left: 610,\n  id: 39\n}, {\n  top: 150,\n  left: 610,\n  id: 40\n}, {\n  top: 110,\n  left: 610,\n  id: 41\n}, {\n  top: 70,\n  left: 610,\n  id: 42\n}, {\n  top: 70,\n  left: 120,\n  id: 43\n}, {\n  top: 70,\n  left: 160,\n  id: 44\n}, {\n  top: 70,\n  left: 200,\n  id: 45\n}, {\n  top: 70,\n  left: 240,\n  id: 46\n}, {\n  top: 70,\n  left: 280,\n  id: 47\n}, {\n  top: 70,\n  left: 320,\n  id: 48\n}, {\n  top: 70,\n  left: 360,\n  id: 49\n}, {\n  top: 70,\n  left: 400,\n  id: 50\n}, {\n  top: 70,\n  left: 440,\n  id: 51\n}, {\n  top: 70,\n  left: 480,\n  id: 52\n}, {\n  top: 70,\n  left: 520,\n  id: 53\n}, {\n  top: 70,\n  left: 560,\n  id: 54\n}, {\n  top: 215,\n  left: 120,\n  id: 55\n}, {\n  top: 215,\n  left: 160,\n  id: 56\n}, {\n  top: 215,\n  left: 200,\n  id: 57\n}, {\n  top: 215,\n  left: 240,\n  id: 58\n}, {\n  top: 215,\n  left: 280,\n  id: 59\n}, {\n  top: 215,\n  left: 320,\n  id: 60\n}, {\n  top: 215,\n  left: 360,\n  id: 61\n}, {\n  top: 215,\n  left: 400,\n  id: 62\n}, {\n  top: 215,\n  left: 440,\n  id: 63\n}, {\n  top: 215,\n  left: 480,\n  id: 64\n}, {\n  top: 215,\n  left: 520,\n  id: 65\n}, {\n  top: 215,\n  left: 560,\n  id: 66\n}, {\n  top: 475,\n  left: 120,\n  id: 67\n}, {\n  top: 475,\n  left: 160,\n  id: 68\n}, {\n  top: 475,\n  left: 200,\n  id: 69\n}, {\n  top: 475,\n  left: 240,\n  id: 70\n}, {\n  top: 475,\n  left: 280,\n  id: 71\n}, {\n  top: 475,\n  left: 320,\n  id: 72\n}, {\n  top: 475,\n  left: 360,\n  id: 73\n}, {\n  top: 475,\n  left: 400,\n  id: 74\n}, {\n  top: 475,\n  left: 440,\n  id: 75\n}, {\n  top: 475,\n  left: 480,\n  id: 76\n}, {\n  top: 475,\n  left: 520,\n  id: 77\n}, {\n  top: 475,\n  left: 560,\n  id: 78\n}, {\n  top: 430,\n  left: 440,\n  id: 79\n}, {\n  top: 390,\n  left: 440,\n  id: 80\n}, {\n  top: 350,\n  left: 440,\n  id: 81\n}, {\n  top: 310,\n  left: 440,\n  id: 82\n}, {\n  top: 270,\n  left: 440,\n  id: 83\n}, {\n  top: 430,\n  left: 230,\n  id: 84\n}, {\n  top: 390,\n  left: 230,\n  id: 85\n}, {\n  top: 350,\n  left: 230,\n  id: 86\n}, {\n  top: 310,\n  left: 230,\n  id: 87\n}, {\n  top: 270,\n  left: 230,\n  id: 88\n}]; // Classes of characters\n\nvar Character = function Character(originalX, originalY, wallsInfo) {\n  var _this = this;\n\n  _classCallCheck(this, Character);\n\n  _defineProperty(this, \"getDirection\", function () {\n    return _this.direction;\n  });\n\n  _defineProperty(this, \"setDirection\", function (direction) {\n    _this.direction = direction;\n  });\n\n  _defineProperty(this, \"getPosX\", function () {\n    return _this.posX;\n  });\n\n  _defineProperty(this, \"getPosY\", function () {\n    return _this.posY;\n  });\n\n  _defineProperty(this, \"setPosX\", function (posX) {\n    _this.posX = posX;\n  });\n\n  _defineProperty(this, \"setPosY\", function (posY) {\n    _this.posY = posY;\n  });\n\n  _defineProperty(this, \"detectLimitVerticalFloor\", function (nextVerticalMove) {\n    if (nextVerticalMove <= 0 || nextVerticalMove + 50 >= heightFloor) return false;\n    return true;\n  });\n\n  _defineProperty(this, \"detectLimitHorizontalFloor\", function (nextHorizontalMove) {\n    if (nextHorizontalMove - 25 <= 0 || nextHorizontalMove + 25 >= 700) return false;\n    return true;\n  });\n\n  _defineProperty(this, \"detectVerticalWalls\", function (nextVerticalMove, nextHorizontalMove) {\n    var ok = true;\n\n    _this.wallsInfo.forEach(function (wall) {\n      if (nextVerticalMove <= heightFloor - wall.top + wallDistance && nextVerticalMove >= heightFloor - wall.top || nextVerticalMove + 50 >= heightFloor - wall.top - wall.height - wallDistance && nextVerticalMove + 50 <= heightFloor - wall.top - wall.height) {\n        if (nextHorizontalMove + 25 >= wall.left && nextHorizontalMove - 25 <= wall.left + wall.width) {\n          ok = false;\n        }\n      }\n    });\n\n    return ok;\n  });\n\n  _defineProperty(this, \"detectHorizontalWalls\", function (nextHorizontalMove, nextVerticalMove) {\n    var ok = true;\n\n    _this.wallsInfo.forEach(function (wall) {\n      if (nextHorizontalMove + 25 >= wall.left - wallDistance && nextHorizontalMove + 25 <= wall.left || nextHorizontalMove - 25 >= wall.left + wall.width && nextHorizontalMove - 25 <= wall.left + wall.width + wallDistance) {\n        if (nextVerticalMove + 25 <= heightFloor - wall.top && nextVerticalMove >= heightFloor - wall.top - wall.height) {\n          ok = false;\n        }\n      }\n    });\n\n    return ok;\n  });\n\n  _defineProperty(this, \"handleMove\", function (move, step) {\n    switch (move) {\n      case 'ArrowUp':\n        if (_this.detectLimitVerticalFloor(_this.posY + step) && _this.detectVerticalWalls(_this.posY + step, _this.posX)) {\n          _this.posY = _this.posY + step;\n          _this.direction = 'ArrowUp';\n        }\n\n        break;\n\n      case 'ArrowDown':\n        if (_this.detectLimitVerticalFloor(_this.posY - step) && _this.detectVerticalWalls(_this.posY - step, _this.posX)) {\n          _this.posY = _this.posY - step;\n          _this.direction = 'ArrowDown';\n        }\n\n        break;\n\n      case 'ArrowRight':\n        if (_this.detectLimitHorizontalFloor(_this.posX + step) && _this.detectHorizontalWalls(_this.posX + step, _this.posY)) {\n          _this.posX = _this.posX + step;\n          _this.direction = 'ArrowRight';\n        }\n\n        break;\n\n      case 'ArrowLeft':\n        if (_this.detectLimitHorizontalFloor(_this.posX - step) && _this.detectHorizontalWalls(_this.posX - step, _this.posY)) {\n          _this.posX = _this.posX - step;\n          _this.direction = 'ArrowLeft';\n        }\n\n        break;\n\n      default:\n        break;\n    }\n  });\n\n  this.posX = originalX;\n  this.posY = originalY;\n  this.direction = 'ArrowRight';\n  this.wallsInfo = wallsInfo;\n  return this;\n};\n\nvar PacMan = /*#__PURE__*/function (_Character) {\n  _inherits(PacMan, _Character);\n\n  var _super2 = _createSuper(PacMan);\n\n  function PacMan(originalX, originalY, wallsInfo, foods) {\n    var _temp, _this2;\n\n    _classCallCheck(this, PacMan);\n\n    var _super = (_temp = _this2 = _super2.call(this, originalX, originalY, wallsInfo), _defineProperty(_assertThisInitialized(_this2), \"initialization\", function (_self) {\n      document.addEventListener('keydown', function (event) {\n        if (directions.includes(event.key)) {\n          _self._super.handleMove(event.key, step);\n\n          _self.updatePosition();\n        }\n      });\n    }), _defineProperty(_assertThisInitialized(_this2), \"getPacMan\", function () {\n      return _this2.pac;\n    }), _defineProperty(_assertThisInitialized(_this2), \"getCountFood\", function () {\n      return _this2.countFoods;\n    }), _defineProperty(_assertThisInitialized(_this2), \"eatFood\", function () {\n      _this2.foodsInfo.forEach(function (f, i) {\n        // // We check if pac eat food vertically\n        if (Math.abs(heightFloor - f.top + foodHeight - _this2.posY) <= 3 || Math.abs(_this2.posY + sizePacman - (heightFloor - f.top)) <= 3) {\n          // We check if pacman is align with food laterally\n          if (Math.abs(_this2.posX - f.left) < 10) {\n            var foodEl = document.getElementById(f.id);\n\n            if (foodEl) {\n              foodEl.style.display = 'none';\n\n              if (!foodAte.includes(f.id)) {\n                _this2.countFoods += 1;\n                foodAte.push(f.id);\n              }\n\n              if (_this2.countFoods === maxFood) {\n                Victory();\n              }\n            }\n          }\n        } // We check if pac eat food laterally\n\n\n        if (Math.abs(_this2.posX + sizePacman - f.left) <= 3 || Math.abs(f.left + foodWidth - _this2.posX) <= 3) {\n          // We check if pacman is align with food vertically\n          if (Math.abs(_this2.posY - (heightFloor - f.top)) <= 40) {\n            var _foodEl = document.getElementById(f.id);\n\n            if (_foodEl) {\n              _foodEl.style.display = 'none';\n\n              if (!foodAte.includes(f.id)) {\n                _this2.countFoods += 1;\n                foodAte.push(f.id);\n              }\n\n              if (_this2.countFoods === maxFood) {\n                Victory();\n              }\n            }\n          }\n        }\n      });\n    }), _defineProperty(_assertThisInitialized(_this2), \"updatePosition\", function () {\n      _this2.pac.style.transform = \"rotate(\".concat(angleDirection[_this2.direction], \"deg)\");\n      _this2.pac.style.left = \"\".concat(_this2.posX - 25, \"px\");\n      _this2.pac.style.bottom = \"\".concat(_this2.posY, \"px\");\n\n      _this2.eatFood();\n    }), _temp);\n\n    _this2._super = _super;\n    _this2.foodsInfo = foods;\n    _this2.countFoods = 0; // Pac Body\n\n    _this2.pac = document.createElement('div');\n\n    _this2.pac.setAttribute('id', 'pacman');\n\n    _this2.pac.style.width = \"\".concat(sizePacman, \"px\");\n    _this2.pac.style.height = \"\".concat(sizePacman, \"px\");\n    _this2.pac.style.borderRadius = '25px';\n    _this2.pac.style.border = 'solid 2px black';\n    _this2.pac.style.backgroundColor = 'yellow';\n    _this2.pac.style.position = 'absolute';\n    _this2.pac.style.left = \"\".concat(_this2.posX - 25, \"px\");\n    _this2.pac.style.bottom = \"\".concat(_this2.posY, \"px\"); // Pac Mouth\n\n    var mouth = document.createElement('div');\n    mouth.style.backgroundColor = \"black\";\n    mouth.style.position = \"absolute\";\n    mouth.style.width = \"100%\";\n    mouth.style.height = \"100%\";\n    mouth.style.clipPath = \"polygon(100% 74%, 44% 48%, 100% 21%)\";\n    mouth.style.animationName = \"eat\";\n    mouth.style.animationDuration = \"0.7s\";\n    mouth.style.animationIterationCount = \"infinite\";\n\n    _this2.pac.appendChild(mouth);\n\n    _this2.initialization(_assertThisInitialized(_this2));\n\n    return _this2;\n  }\n\n  return PacMan;\n}(Character);\n\nvar Ghost = /*#__PURE__*/function (_Character2) {\n  _inherits(Ghost, _Character2);\n\n  var _super3 = _createSuper(Ghost);\n\n  function Ghost(originalX, originalY, wallsInfo, pacman) {\n    var _temp2, _this3;\n\n    _classCallCheck(this, Ghost);\n\n    var _super = (_temp2 = _this3 = _super3.call(this, originalX, originalY, wallsInfo), _defineProperty(_assertThisInitialized(_this3), \"initialization\", function (_self) {\n      _self.intervalId = setInterval(function () {\n        function getRandomMove() {\n          var randomIndex = Math.floor(Math.random() * 4); // incorporing bias\n\n          var rand1 = Math.floor(Math.random() * 100);\n          var rand2 = Math.floor(Math.random() * 100);\n          randomIndex = randomIndex === 2 && rand1 % 2 === 0 ? 3 : randomIndex;\n          randomIndex = randomIndex === 1 && rand2 % 2 === 0 ? 0 : randomIndex;\n          var randomMove = directions[randomIndex];\n\n          if (randomMove === 'ArrowUp' || randomMove === 'ArrowDown') {\n            if (_self.countTop < ghostLimitStraightLine && !_self.switchTop) {\n              randomMove = _self.biasDirectionY;\n              _self.countTop += 1;\n            } else if (_self.countTop == ghostLimitStraightLine && !_self.switchTop) {\n              _self.countTop = 0;\n              _self.switchTop = true;\n            }\n\n            if (_self.countTop < ghostLimitStraightLine && _self.switchTop) {\n              randomMove = _self.biasDirectionY === 'ArrowDown' ? 'ArrowUp' : 'ArrowDown';\n              _self.countTop += 1;\n            } else if (_self.countTop == ghostLimitStraightLine && _self.switchTop) {\n              _self.countTop = 0;\n              _self.switchTop = false;\n            }\n          }\n\n          if (randomMove === 'ArrowLeft' || randomMove === 'ArrowRight') {\n            if (_self.countRight < ghostLimitStraightLine && !_self.switchLeft) {\n              randomMove = _self.biasDirectionX;\n              _self.countRight += 1;\n            } else if (_self.countRight == ghostLimitStraightLine && !_self.switchLeft) {\n              _self.countRight = 0;\n              _self.switchLeft = true;\n            }\n\n            if (_self.countRight < ghostLimitStraightLine && _self.switchLeft) {\n              randomMove = _self.biasDirectionX === 'ArrowRight' ? 'ArrowLeft' : 'ArrowRight';\n              _self.countRight += 1;\n            } else if (_self.countRight == ghostLimitStraightLine && _self.switchLeft) {\n              _self.countRight = 0;\n              _self.switchLeft = false;\n            }\n          }\n\n          _self._super.handleMove(randomMove, stepGhost);\n\n          _self.updatePosition();\n        }\n\n        getRandomMove();\n      }, 70);\n    }), _defineProperty(_assertThisInitialized(_this3), \"getGhost\", function () {\n      return _this3.ghost;\n    }), _defineProperty(_assertThisInitialized(_this3), \"updatePosition\", function () {\n      // We check if the ghost hit pacman vertically\n      if (Math.abs(_this3.posY - _this3.pac.getPosY() - sizePacman) < 15 || Math.abs(_this3.pac.getPosY() - _this3.posY - sizePacman) < 15) {\n        // We check if pacman is align with ghost laterally\n        if (Math.abs(_this3.posX - _this3.pac.getPosX()) < 25) {\n          clearInterval(_this3.intervalId);\n          GameOver();\n        }\n      } // We check if the ghost hit pacman laterally\n\n\n      if (Math.abs(_this3.pac.getPosX() + sizePacman - _this3.posX) < 10 || Math.abs(_this3.posX + widthGhost - _this3.pac.getPosX()) < 10) {\n        // We check if pacman is align with ghost vertically\n        if (Math.abs(_this3.pac.getPosY() - _this3.posY) < 25) {\n          clearInterval(_this3.intervalId);\n          GameOver();\n        }\n      }\n\n      _this3.ghost.style.left = \"\".concat(_this3.posX - 25, \"px\");\n      _this3.ghost.style.bottom = \"\".concat(_this3.posY, \"px\");\n    }), _temp2);\n\n    _this3._super = _super;\n    _this3.pac = pacman;\n    _this3.countTop = 0;\n    _this3.countRight = 0;\n    _this3.switchLeft = false;\n    _this3.switchTop = false;\n    _this3.intervalId = null;\n    _this3.biasDirectionX = Math.floor(Math.random() * 100) % 2 == 0 ? \"ArrowRight\" : \"ArrowLeft\";\n    _this3.biasDirectionY = Math.floor(Math.random() * 100) % 2 == 0 ? \"ArrowUp\" : \"ArrowDown\"; // Ghost\n    // Take random color\n\n    var i = Math.floor(Math.random() * 4);\n    var eyes = document.createElement('div');\n    eyes.style.height = \"20px\";\n    eyes.style.width = \"\".concat(widthGhost, \"px\");\n    eyes.style.display = 'flex';\n    eyes.style.justifyContent = 'space-around';\n    eyes.style.alignItems = 'flex-end';\n    var eye = document.createElement('div');\n    eye.style.backgroundColor = '#fff';\n    eye.style.height = '15px';\n    eye.style.width = '15px';\n    eye.style.borderRadius = '100%';\n    eye.style.display = 'flex';\n    eye.style.justifyContent = 'flex-start';\n    eye.style.alignItems = 'center';\n    var iris = document.createElement('div');\n    iris.style.backgroundColor = 'blue';\n    iris.style.height = '7px';\n    iris.style.width = '7px';\n    iris.style.borderRadius = '100%';\n    eye.appendChild(iris);\n    eyes.appendChild(eye);\n    var eye2 = eye.cloneNode();\n    var iris2 = iris.cloneNode();\n    eye2.appendChild(iris2);\n    eyes.appendChild(eye2);\n    var tail = document.createElement('div');\n    tail.style.backgroundRepeat = 'repeat-x';\n    tail.style.bottom = '-10px';\n    tail.style.height = '10px';\n    tail.style.position = 'absolute';\n    tail.style.width = '35px';\n    tail.style.background = \"linear-gradient(-45deg, transparent 75%, \".concat(colorsGhost[i], \" 75%) 0 50%, linear-gradient( 45deg, transparent 75%, \").concat(colorsGhost[i], \" 75%) 0 50%\");\n    tail.style.backgroundSize = \"10px 10px, 10px 10px\";\n    _this3.ghost = document.createElement('div');\n\n    _this3.ghost.setAttribute('class', 'ghost');\n\n    _this3.ghost.style.height = \"\".concat(heightGhost, \"px\");\n    _this3.ghost.style.width = \"\".concat(widthGhost, \"px\");\n    _this3.ghost.style.borderRadius = '30% 30% 0 0';\n    _this3.ghost.style.backgroundColor = colorsGhost[i];\n    _this3.ghost.style.position = 'absolute';\n    _this3.ghost.style.left = \"\".concat(_this3.posX - 25, \"px\");\n    _this3.ghost.style.bottom = \"\".concat(_this3.posY, \"px\");\n\n    _this3.ghost.appendChild(eyes);\n\n    _this3.ghost.appendChild(tail);\n\n    _this3.initialization(_assertThisInitialized(_this3));\n\n    return _this3;\n  }\n\n  return Ghost;\n}(Character); // initializing game elements\n\n\nvar pacMan = new PacMan(350, 50, wallsInfos, foodsPosition); // Create Ghost\n\nfunction generateGhosts() {\n  var ghost1 = new Ghost(350, 350, wallsInfos, pacMan);\n  gameFloor.appendChild(ghost1.getGhost());\n  intervalGhostId = setInterval(function () {\n    gameFloor.appendChild(new Ghost(350, 350, wallsInfos, pacMan).getGhost());\n  }, 10000);\n} // Create walls\n\n\nvar walls = wallsInfos.map(function (wall, i) {\n  var w = document.createElement('div');\n  w.setAttribute('id', \"wall-\".concat(i));\n  w.style.width = \"\".concat(wall.width, \"px\");\n  w.style.height = \"\".concat(wall.height, \"px\");\n  w.style.border = '#3F51B5 7px double';\n  w.style.boxSizing = 'border-box';\n  w.style.borderRadius = '2px';\n  w.style.backgroundColor = 'black';\n  w.style.position = 'absolute';\n  w.style.top = \"\".concat(wall.top, \"px\");\n  w.style.left = \"\".concat(wall.left, \"px\");\n  return w;\n}); // Create Food\n\nvar foods = foodsPosition.map(function (p, i) {\n  var f = document.createElement('div');\n  f.setAttribute('id', p.id);\n  f.style.width = \"\".concat(foodWidth, \"px\");\n  f.style.height = \"\".concat(foodHeight, \"px\");\n  f.style.backgroundColor = foodColor;\n  f.style.position = \"absolute\";\n  f.style.top = \"\".concat(p.top, \"px\");\n  f.style.left = \"\".concat(p.left, \"px\");\n  return f;\n});\n\nfunction GameOver() {\n  var card = document.createElement('div');\n  card.style.width = \"300px\";\n  card.style.height = \"300px\";\n  card.style.border = \"solid 3px #3F51B5\";\n  card.style.display = \"flex\";\n  card.style.justifyContent = \"center\";\n  card.style.alignItems = \"center\";\n  card.style.backgroundColor = \"black\";\n  card.style.zIndex = 999;\n  card.style.position = \"absolute\";\n  card.style.left = \"\".concat(widthFloor / 2 - 150, \"px\");\n  card.style.top = \"\".concat(heightFloor / 2 - 150, \"px\");\n  var text = document.createElement('div');\n  text.innerHTML = \"Game Over\";\n  text.style.color = \"red\";\n  text.style.fontWeight = \"bold\";\n  text.style.fontSize = \"40px\";\n  card.appendChild(text);\n  gameFloor.appendChild(card);\n}\n\nfunction Victory() {\n  var card = document.createElement('div');\n  card.style.width = \"300px\";\n  card.style.height = \"300px\";\n  card.style.border = \"solid 3px #3F51B5\";\n  card.style.display = \"flex\";\n  card.style.justifyContent = \"center\";\n  card.style.alignItems = \"center\";\n  card.style.backgroundColor = \"black\";\n  card.style.zIndex = 999;\n  card.style.position = \"absolute\";\n  card.style.left = \"\".concat(widthFloor / 2 - 150, \"px\");\n  card.style.top = \"\".concat(heightFloor / 2 - 150, \"px\");\n  var text = document.createElement('div');\n  text.innerHTML = \"You won!!\";\n  text.style.color = \"red\";\n  text.style.fontWeight = \"bold\";\n  text.style.fontSize = \"40px\";\n  card.appendChild(text);\n  gameFloor.appendChild(card);\n} // we inject the element on root\n\n\nwalls.forEach(function (wall) {\n  return gameFloor.appendChild(wall);\n});\nfoods.forEach(function (food) {\n  return gameFloor.appendChild(food);\n});\ngameFloor.appendChild(pacMan.getPacMan());\nscreen.appendChild(gameFloor);\nroot.appendChild(screen); // We create the ghosts\n\ngenerateGhosts();\n\n//# sourceURL=webpack://pacman-js/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;