const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);


function setCanvasSize(){

    if (window.innerHeight > window.innerWidth) {
        canvasSize= window.innerWidth * 0.8;
    } else {
        canvasSize= window.innerHeight * 0.8;
    }

    canvas.setAttribute('width',canvasSize)
    canvas.setAttribute('height',canvasSize)
    elementsSize=canvasSize / 10;
    startGame();
}

function startGame() {
    console.log({canvasSize, elementsSize});

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';


    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize*i,elementsSize);

    }


    //window.innerHeight
    // window.innerWidth

    //game.fillRect(0,50,100,100);
    //game.clearRect(0,50,50,50);
    //game.clearRect(50,50,50,50);

   // game.font='25px Verdana'
   // game.fillStyle='purple';
   // game.textAlign ='end';
   // game.fillText('CodeSif',25,25)
}
