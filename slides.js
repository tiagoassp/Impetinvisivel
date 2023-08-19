let currentSlide = 1;
function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.slides .slide');
    const buttons = document.querySelectorAll('.navigation .bar');
    
    // Hide all slides and remove active class from all buttons
    slides.forEach(slide => {
        slide.style.opacity = 0;
    });
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected slide and add active class to the corresponding button
    slides[slideIndex - 1].style.opacity = 1;
    buttons[slideIndex - 1].classList.add('active');
}


// Show the initial slide
showSlide(currentSlide);

function moveSlide(sideToMove) {
    const slides = document.querySelectorAll('.slides .slide');
    let index = 1;
    for (const slide of slides) {
        if (slide.style.opacity === '1') {
            currentSlide = index;
            break;
        }
        index++;
    }

    const nextSlideIndex = currentSlide + sideToMove;

    // Wrap around if needed
    if (nextSlideIndex > slides.length) {
        currentSlide = 1;
    } else if (nextSlideIndex < 1) {
        currentSlide = slides.length;
    } else {
        currentSlide = nextSlideIndex;
    }

    for (const slide of slides) {
        slide.style.opacity = 0;
    }

    slides[currentSlide - 1].style.opacity = 1;

    // Update the active button
    const buttons = document.querySelectorAll('.navigation .bar');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    buttons[currentSlide - 1].classList.add('active');
}
