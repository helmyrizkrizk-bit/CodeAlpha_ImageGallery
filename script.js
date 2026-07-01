const images = [
    "pic1.JPG",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg",
    "pic6.jpg",
    "pic7.jpg",
    "pic8.jpg",
    "pic9.jpg"
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
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(img => {
        if (category === "all") {
            img.style.display = "block";
        } else if (img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
