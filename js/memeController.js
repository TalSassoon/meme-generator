var gCanvas;
var gCtx;


function init() {
    drawCanvas()
}
function onWriteText(text) {
    drawText(text)
    
}
function onWriteButtomText(text) {
    drawButtomText(text)
    
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

function drawText(text) {
    gCtx.lineWidth =  2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '2.5rem impact';
    gCtx.textBaseline = 'top';
    
    console.log(gCtx.textBaseline);
    gCtx.textAlign = 'center';
    gCtx.fillText(text, gCanvas.width/2 , 6, gCanvas.width);
    gCtx.strokeText(text, gCanvas.width/2 , 6, gCanvas.width);
}



function drawButtomText(text) {
    gCtx.lineWidth =  2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '2.5rem impact';
    gCtx.textBaseline = 'top';
    
    console.log(gCtx.font);
    gCtx.textAlign = 'center';
    gCtx.fillText(text, gCanvas.width/2 , gCanvas.height -50 , gCanvas.width);
    gCtx.strokeText(text, gCanvas.width/2 , gCanvas.height -50, gCanvas.width);
}
