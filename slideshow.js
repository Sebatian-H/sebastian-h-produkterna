var imgArray = [
    './IMG/slideshow-img1.jpeg',
    './IMG/slideshow-img2.jpeg',
    './IMG/slideshow-img3.jpeg',
    './IMG/slideshow-img4.webp'
];
var curIndex = 0;
var imgDuration = 5000;

function slideShow() {
    document.getElementById('image').src = imgArray[curIndex];
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout("slideShow()", imgDuration);
}
slideShow();