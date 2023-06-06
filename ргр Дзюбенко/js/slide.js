$(document).ready(function() {
    var slides = $('.slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 3000); // Інтервал між зміною слайдів (в мілісекундах)
  
    showSlide(currentSlide);
  
    function showSlide(index) {
      slides.hide();
      slides.eq(index).fadeIn();
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    $('#prevBtn').click(function() {
      prevSlide();
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 2000);
    });
  
    $('#nextBtn').click(function() {
      nextSlide();
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 2000);
    });
  });