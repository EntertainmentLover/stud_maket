let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlide() {
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}
function moveSlide(direction) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');
    updateSlide();
}
let autoSlide = setInterval(() => moveSlide(1), 3000);
document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlide);
    moveSlide(-1);
});
document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlide);
    moveSlide(1);
});