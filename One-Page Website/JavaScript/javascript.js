let slideIndex = 0;
const images = document.getElementsByClassName("gallery-image");

function openLightbox(element) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-image");
    const thumbnailContainer = document.getElementById("thumbnail-container");
    
    // Clear existing thumbnails
    thumbnailContainer.innerHTML = '';
    
    // Create thumbnails
    Array.from(images).forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img.src;
        thumb.className = 'thumbnail';
        if (index === slideIndex) {
            thumb.classList.add('active');
        }
        thumb.onclick = (e) => {
            e.stopPropagation();
            slideIndex = index;
            updateLightbox();
        };
        thumbnailContainer.appendChild(thumb);
    });
    
    // Find the index of clicked image
    slideIndex = Array.from(images).indexOf(element);
    
    lightbox.style.display = "block";
    updateLightbox();
}

function updateLightbox() {
    const lightboxImg = document.getElementById("lightbox-image");
    lightboxImg.src = images[slideIndex].src;
    
    // Update thumbnails
    const thumbnails = document.getElementsByClassName('thumbnail');
    Array.from(thumbnails).forEach((thumb, index) => {
        if (index === slideIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeSlide(n, event) {
    // Prevent the click from bubbling up to the lightbox
    if (event) {
        event.stopPropagation();
    }
    
    slideIndex += n;
    
    // Loop back to start/end if needed
    if (slideIndex >= images.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }
    
    updateLightbox();
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (document.getElementById("lightbox").style.display === "block") {
        if (e.key === "ArrowLeft") {
            changeSlide(-1);
        } else if (e.key === "ArrowRight") {
            changeSlide(1);
        } else if (e.key === "Escape") {
            closeLightbox();
        }
    }
});

// Prevent lightbox image click from closing the lightbox
document.getElementById("lightbox-image").addEventListener('click', (e) => {
    e.stopPropagation();
});

// Initialize thumbnails container click handler
document.getElementById("thumbnail-container").addEventListener('click', (e) => {
    e.stopPropagation();
});