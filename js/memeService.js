var gCanvas;
var gCtx;


var gImgs = [{ id: 1, url: './meme-imgs/1.jpg', keywords: ['happy'] }];
var gMeme = {
    selectedImgId: 5, selectedLineIdx: 0,

    lines: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }]
}


function drawCanvas() {
    gCanvas = document.querySelector('#canvas');;
    gCtx = gCanvas.getContext('2d');
    drawImgFromlocal()
}

function drawImgFromlocal() {
    var img = new Image()
    img.src = gImgs[0].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
}

function drawText(text, x=16, y=25) {
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '2.5rem impact';
    gCtx.textBaseline = 'top';
    console.log(gCtx.textBaseline);
    gCtx.textAlign = 'center';
    gCtx.fillText(text, gCanvas.width/2 , 0, gCanvas.width);
    gCtx.strokeText(text, x, y);
}








var dragok = false;



function myMove(e){
 if (dragok){
  x = e.pageX - canvas.offsetLeft;
  y = e.pageY - canvas.offsetTop;
 }
}

function myDown(e){
 if (e.pageX < x + 15 + canvas.offsetLeft && e.pageX > x - 15 +
 canvas.offsetLeft && e.pageY < y + 15 + canvas.offsetTop &&
 e.pageY > y -15 + canvas.offsetTop){
  x = e.pageX - canvas.offsetLeft;
  y = e.pageY - canvas.offsetTop;
  dragok = true;
  canvas.onmousemove = myMove;
 }
}

function myUp(){
 dragok = false;
 canvas.onmousemove = null;
}

