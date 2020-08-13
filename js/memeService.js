
var gImgs;
var gMeme;
//  = {
//     selectedImgId: 5, selectedLineIdx: 0,

//     lines: [
//         {
//             txt: 'I never eat Falafel',
//             size: 20,
//             align: 'left',
//             color: 'red'
//         }]
// }

creategImgs()
function creategMeme(txt) {
        gMeme = {
            lines: [
            {
                txt:txt
               
            }
        ]
}
return gMeme.lines[0].txt;
}


function creategImgs() {
    gImgs = [{ id: 1, url: './meme-imgs/1.jpg', keywords: ['happy'] }];
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

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gCanvas.width / 2, gCanvas.height / 2);
}