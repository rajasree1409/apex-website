const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetAutoScroll();
});

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  resetAutoScroll();
});

function startAutoScroll() {
  slideInterval = setInterval(nextSlide, 2000);
}

function resetAutoScroll() {
  clearInterval(slideInterval);
  startAutoScroll();
}

startAutoScroll();
