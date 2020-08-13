'use strict';
function initGallery(){
console.log("hello");
renderGallery()
}

function renderGallery() {
   let images = getgGalleryImgs();
   let strHtml = images.map(image=>{
       return image.img
   })
   let elGallery = document.querySelector('.gallery');
    elGallery.innerHTML = strHtml.join('');

}
function editImage(elImg) {
    
    let imgIdx = parseInt(elImg.dataset.idx);
    console.log("edit image idx:" ,imgIdx);
    creategImgs(imgIdx)
    drawImgFromlocal()
    
}