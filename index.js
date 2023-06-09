import { Levels } from "./level.js";


const world = document.querySelector('#gameBoard');

let frames=0;
let Position;
let niveau = 0;
let arrayCopy = JSON.parse(JSON.stringify(Levels));

let u = 0;
let p = 0;
let Case = 0;
let i;
let col;


var soundJump = document.createElement("audio");
soundJump.src = "saut.mp3";

var soundLvl = document.createElement("audio");
soundLvl.src = "3.mp3";



function map() {
for ( i = 0; i < Levels[niveau].length; i++) {
    for (col = 0; col < Levels[niveau][i].length; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (Levels[niveau][i][col] === 0) {
        cell.classList.add('empty');
        cell.style.top = `${i * 4}vw`
        cell.style.left = `${col * 4}vw`
      } else if (Levels[niveau][i][col] === 1) {
        cell.classList.add('wall');
        cell.style.top = `${i * 4}vw`
        cell.style.left = `${col * 4}vw`
      } else if (Levels[niveau][i][col] === 2) {
        cell.classList.add('box');
        cell.style.top = `${i * 4}vw`
        cell.style.left = `${col * 4}vw`
      } else if (Levels[niveau][i][col] === 3) {
        
        Position = Levels[niveau][i][col];
        u = i;
        p = col;
        cell.classList.add('player');
        cell.style.top = `${i * 4}vw`
        cell.style.left = `${col * 4}vw`
      } else if (Levels[niveau][i][col] === 4) {
        cell.classList.add('target');
        console.log(Case);
        cell.style.top = `${i * 4}vw`
        cell.style.left = `${col * 4}vw`
      }else if (Levels[niveau][i][col] === 5) {
        cell.classList.add('greate');
        console.log(good);
        cell.style.top = `${i * 4}vw`
        cell.style.left = `${col * 4}vw`
      }
      gameboard.appendChild(cell);
    }
  }
}map();


function gagner(){
  let victoire = 0;
  for (let i = 0; i < Levels[niveau].length; i++) {
    for (let col = 0; col < Levels[niveau][i].length; col++) {
      if (Levels[niveau][i][col] === 4){
        victoire++;
      }
    }
  }
  if (victoire === 0){
    for (let i = 0; i < Levels[niveau].length; i++) {
      for (let col = 0; col < Levels[niveau][i].length; col++) {
          Levels[niveau][i][col] = arrayCopy[niveau][i][col];
      }
    }
    niveau++;
    soundLvl.play();
  }
}

// Boucle d'animation
const animationLoop= ()=>{
    requestAnimationFrame(animationLoop);
   frames++;
   gagner();
   
}
animationLoop();

const keys = {
    ArrowLeft:{   pressed:false   },
    ArrowRight:{pressed:false  },  
    ArrowUp:{pressed:false  },
    ArrowDown:{pressed:false  },
    q:{pressed:false},
    r:{pressed:false}
 }

addEventListener('keydown',({key})=>{
    
    switch(key){
    case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            console.log('gauche');
            soundJump.play();
            if (Levels[niveau][u][p-1] === 0){
              if (arrayCopy[niveau][u][p] === 4){
                Levels[niveau][u][p-1] = Levels[niveau][u][p]
                Levels[niveau][u][p] = 4
                map();
              }else{
                Levels[niveau][u][p-1] = Levels[niveau][u][p]
                Levels[niveau][u][p] = 0}
            map();
            }else if(Levels[niveau][u][p-1] === 4){
              Levels[niveau][u][p-1] = Levels[niveau][u][p]
              Levels[niveau][u][p] = 0
              map();
            }else if (arrayCopy[niveau][u][p] === 4){
              if (Levels[niveau][u][p-1] === 0){
                  Levels[niveau][u][p-1] = Levels[niveau][u][p]
                  Levels[niveau][u][p] = 4
                  map();
                }else if (Levels[niveau][u][p-1] === 1){
                console.log('mur')
              }else if (Levels[niveau][u][p-1] === 2){
                if (Levels[niveau][u][p-2] === 1){
                }else if(Levels[niveau][u][p-2] === 2){
                }else{
                  Levels[niveau][u][p-2] = 2;
                  Levels[niveau][u][p-1] = 4;
                  Levels[niveau][u][p-1] = Levels[niveau][u][p]
                  Levels[niveau][u][p] = 4;
                  map();
                }
              }
              map();
            }else if (Levels[niveau][u][p-1] === 1){
              console.log('mur')
            }else if (Levels[niveau][u][p-1] === 2){
              if (Levels[niveau][u][p-2] === 1){
              }else if(Levels[niveau][u][p-2] === 2){
              }else{
                Levels[niveau][u][p-2] = 2;
                Levels[niveau][u][p-1] = 0;
                Levels[niveau][u][p-1] = Levels[niveau][u][p]
                Levels[niveau][u][p] = 0;
                map();
              }
            }
            break;
         case 'ArrowRight':
             keys.ArrowRight.pressed = true;
             console.log('droite');
             soundJump.play();
             if (Levels[niveau][u][p+1] === 0){
              if (arrayCopy[niveau][u][p] === 4){
                Levels[niveau][u][p+1] = Levels[niveau][u][p]
                Levels[niveau][u][p] = 4
                map();
              }else{
                Levels[niveau][u][p+1] = Levels[niveau][u][p]
                Levels[niveau][u][p] = 0}
            map();
            }else if(Levels[niveau][u][p+1] === 4){
              Levels[niveau][u][p+1] = Levels[niveau][u][p]
              Levels[niveau][u][p] = 0
              map();
            }else if (arrayCopy[niveau][u][p] === 4){
              if (Levels[niveau][u][p+1] === 0){
                  Levels[niveau][u][p+1] = Levels[niveau][u][p]
                  Levels[niveau][u][p] = 4
                  map();
                }else if (Levels[niveau][u][p+1] === 1){
                console.log('mur')
              }else if (Levels[niveau][u][p+1] === 2){
                if (Levels[niveau][u][p+2] === 1){
                }else if(Levels[niveau][u][p+2] === 2){
                }else{
                  Levels[niveau][u][p+2] = 2;
                  Levels[niveau][u][p+1] = 4;
                  Levels[niveau][u][p+1] = Levels[niveau][u][p]
                  Levels[niveau][u][p] = 4;
                  map();
                }
              }
              map();
            }else if (Levels[niveau][u][p+1] === 1){
              console.log('mur')
             }else if (Levels[niveau][u][p+1] === 2){
                if (Levels[niveau][u][p+2] === 1){
                }else if(Levels[niveau][u][p+2] === 2){
                }else{
             Levels[niveau][u][p+2] = 2;
             Levels[niveau][u][p+1] = 0;
             Levels[niveau][u][p+1] = Levels[niveau][u][p]
             Levels[niveau][u][p] = 0;
             map();
                }
             }
             break;
        case 'ArrowUp':
            keys.ArrowUp.pressed = true;
            console.log('haut');
            soundJump.play();
            if (Levels[niveau][u-1][p] === 0){
              if (arrayCopy[niveau][u][p] === 4){
                Levels[niveau][u-1][p] = Levels[niveau][u][p]
                Levels[niveau][u][p] = 4
                map();
              }else{
                Levels[niveau][u-1][p] = Levels[niveau][u][p]
                Levels[niveau][u][p] = 0}
            map();
            }else if(Levels[niveau][u-1][p] === 4){
              Levels[niveau][u-1][p] = Levels[niveau][u][p]
              Levels[niveau][u][p] = 0
              map();
            }else if (arrayCopy[niveau][u][p] === 4){
              if (Levels[niveau][u-1][p] === 0){
                  Levels[niveau][u-1][p] = Levels[niveau][u][p]
                  Levels[niveau][u][p] = 4
                  map();
                }else if (Levels[niveau][u-1][p] === 1){
                console.log('mur')
              }else if (Levels[niveau][u-1][p] === 2){
                if (Levels[niveau][u-2][p] === 1){
                }else if(Levels[niveau][u-2][p] === 2){
                }else{
                  Levels[niveau][u-2][p] = 2;
                  Levels[niveau][u-1][p] = 4;
                  Levels[niveau][u-1][p] = Levels[niveau][u][p]
                  Levels[niveau][u][p] = 4;
                  map();
                }
              }
              map();
            }else if (Levels[niveau][u-1][p] === 1){
                console.log('mur')
               }else if (Levels[niveau][u-1][p] === 2){
                if (Levels[niveau][u-2][p] === 1){
                }else if(Levels[niveau][u-2][p] === 2){
                }else if (arrayCopy[niveau][u][p] === 4){
                    Levels[niveau][u-1][p] = Levels[niveau][u][p]
                    Levels[niveau][u][p] = 4
                    map();
                  }else{
                  Levels[niveau][u-2][p] = 2;
                  Levels[niveau][u-1][p] = 0;
                  Levels[niveau][u-1][p] = Levels[niveau][u][p]
                  Levels[niveau][u][p] = 0;
                  }
             map();
                }
             
            break;
        case 'ArrowDown':
            keys.ArrowDown.pressed = true;
            console.log('bas');
            soundJump.play();
            if (Levels[niveau][u+1][p] === 0){
              if (arrayCopy[niveau][u][p] === 4){
                Levels[niveau][u+1][p] = Levels[niveau][u][p]
                Levels[niveau][u][p] = 4
                map();
              }else{
                Levels[niveau][u+1][p] = Levels[niveau][u][p]
                Levels[niveau][u][p] = 0}
            map();
            }else if(Levels[niveau][u+1][p] === 4){
              Levels[niveau][u+1][p] = Levels[niveau][u][p]
              Levels[niveau][u][p] = 0
              map();
            }else if (arrayCopy[niveau][u][p] === 4){
              if (Levels[niveau][u+1][p] === 0){
                  Levels[niveau][u+1][p] = Levels[niveau][u][p]
                  Levels[niveau][u][p] = 4
                  map();
                }else if (Levels[niveau][u+1][p] === 1){
                console.log('mur')
              }else if (Levels[niveau][u+1][p] === 2){
                if (Levels[niveau][u+2][p] === 1){
                }else if(Levels[niveau][u+2][p] === 2){
                }else{
                  Levels[niveau][u+2][p] = 2;
                  Levels[niveau][u+1][p] = 4;
                  Levels[niveau][u+1][p] = Levels[niveau][u][p]
                  Levels[niveau][u][p] = 4;
                  map();
                }
              }
              map();
            }else if (Levels[niveau][u+1][p] === 1){
                console.log('mur')
               }else if (Levels[niveau][u+1][p] === 2){
                if (Levels[niveau][u+2][p] === 1){
                }else if(Levels[niveau][u+2][p] === 2){
                }else if (arrayCopy[niveau][u][p] === 4){
                    Levels[niveau][u+1][p] = Levels[niveau][u][p]
                    Levels[niveau][u][p] = 4
                    map();
                  }else{
                  Levels[niveau][u+2][p] = 2;
                  Levels[niveau][u+1][p] = 0;
                  Levels[niveau][u+1][p] = Levels[niveau][u][p]
                  Levels[niveau][u][p] = 0;
                  }
             map();
                }
             
            break;
        case 'q':
            keys.q.pressed = true;
            niveau ++;
            soundLvl.play();
            console.log('q');
            console.log(niveau)
            if (niveau > 4){
              niveau = 0;
             }
            map();
            break;
        case 'r':
          keys.r.pressed = true;
          Levels[niveau][i][col] = arrayCopy[niveau][i][col];
          map();
          console.log(Levels)
         } 
 })   