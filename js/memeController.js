var gCanvas;
var gCtx;
var gFontSize = 2.5;

function init() {
    drawCanvas()
}
function onWriteText(txt) {
    editgMeme(txt)

    drawText(txt)

}
function onWriteButtomText(text) {
    drawButtomText(text)

}
function drawCanvas() {
    gCanvas = document.querySelector('#canvas');;
    gCtx = gCanvas.getContext('2d');
}

function drawImgFromlocal() {
    let img = new Image()
    let imgs = getgImgs()
    console.log(imgs);

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
    img.src = imgs.url;
}

function drawText(text) {
    clearCanvas();
    drawImgFromlocal();
    drawButtomText();
    setTimeout(() => {
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = 'white';
        gCtx.font = `${gFontSize}rem impact`;
        gCtx.textBaseline = 'top';
        gCtx.textAlign = 'center';
        gCtx.fillText(text, gCanvas.width / 2, 6);
        gCtx.strokeText(text, gCanvas.width / 2, 6);
    }, 100);
}



function drawButtomText(text) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '2.5rem impact';
    gCtx.textBaseline = 'top';

    console.log(gCtx.font);
    gCtx.textAlign = 'center';
    gCtx.fillText(text, gCanvas.width / 2, gCanvas.height - 50);
    gCtx.strokeText(text, gCanvas.width / 2, gCanvas.height - 50);
    // creatMeme(text)
}
function increaseFont() {
    gFontSize += 0.5;
    drawText(document.querySelector('.meme-str').value)
}
function decreaseFont() {
    gFontSize -= 0.5;
    drawText(document.querySelector('.meme-str').value)
}

