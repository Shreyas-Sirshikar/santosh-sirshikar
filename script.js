// JavaScript for slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// JavaScript for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const searchParams = new URLSearchParams(formData).toString();

    fetch('https://script.google.com/macros/s/AKfycbxI8sUQdI0P1JH5rsWZXTKKdA27KqwUrsVnh2uBvdFQF0x4cyI/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: searchParams
    }).then(response => {
        alert("Your message has been submitted successfully!");
        this.reset();
    }).catch(error => console.error('Error!', error.message));
});

