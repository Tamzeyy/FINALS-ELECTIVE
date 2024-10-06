// Add event listeners for navigation menu
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add carousel functionality for research section
const researchCarousel = document.querySelector('.research-carousel');
const researchSlides = researchCarousel.querySelectorAll('.research-slide');

researchCarousel.addEventListener('scroll', () => {
    const scrollPosition = researchCarousel.scrollLeft;
    const slideWidth = researchSlides[0].offsetWidth;
    const currentSlide = Math.floor(scrollPosition / slideWidth);

    researchSlides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
});