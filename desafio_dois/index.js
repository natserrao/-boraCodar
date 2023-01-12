let currentImage = 1;
let imageGif = ["assets/gifsofa.gif", "assets/sofa.png"];
let imageClose = ["assets/stroke.png", "assets/vector.png"];


function change(){

    if (currentImage == imageGif.length && currentImage == imageClose.length){
        currentImage = 0;
    }
        document.getElementById("image-sofa").src = imageGif[currentImage];
        document.getElementById("image-360").src  = imageClose[currentImage];
        currentImage++;
}

