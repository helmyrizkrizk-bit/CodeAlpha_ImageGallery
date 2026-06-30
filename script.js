const images = [
    "images/pic1.JPG",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg",
    "images/pic6.jpg",
    "images/pic7.jpg",
    "images/pic8.jpg",
    "images/pic9.jpg"

];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentIndex];
}
function filterImages(category) {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        if (category === "all") {
            img.style.display = "block";
        } else if (img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
