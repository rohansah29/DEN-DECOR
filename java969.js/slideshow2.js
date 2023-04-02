var slideIndex = 1;
showSlides(slideIndex);

document.querySelector(".prev").addEventListener("click", function() {
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
  plusSlides(1);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides")[0].getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}
