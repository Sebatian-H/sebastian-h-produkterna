//En array med alla bilder som ska vara med i bildspelet
var imgArray = [
    './IMG/slideshow-img1.jpeg',
    './IMG/slideshow-img2.jpeg',
    './IMG/slideshow-img3.jpeg',
    './IMG/slideshow-img4.webp'
];
var curIndex = 0;
//Hur länge en bild kommer visas
var imgDuration = 5000;

function slideShow() {
    //id:et image kommer att vara lika med en bild från imgArray bestämmd utav curIndex värde
    document.getElementById('image').src = imgArray[curIndex];
    //Lägger till +1 i variabeln curIndex
    curIndex++;
    //Om längden på curIndex blir lika lång som mängden bilder i imgArray kommer curIndex bli 0 istället för 1 mer än den var innan
    if (curIndex == imgArray.length) { curIndex = 0; }
    //Sätter en timeout till funktionen ska köras om
    setTimeout("slideShow()", imgDuration);
}
//Startar funktionen
slideShow();