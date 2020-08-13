
var gnextId = 0;
var gGalleryImgs = [
    {
        id : gnextId++, 
        img :`<a href="#" onclick="editImage(this)" style="background-image:url(/meme-imgs/${gnextId}.jpg);" data-idx="${gnextId}"></a>`
    },
    {
        id : gnextId++,
        img :`<a href="#" onclick="editImage(this)" style="background-image:url(/meme-imgs/${gnextId}.jpg);" data-idx="${gnextId}"></a>`
    }
]
function getgGalleryImgs() {
    return gGalleryImgs;
}
// editMeme.html
// editMeme.html