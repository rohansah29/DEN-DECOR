var slideIndex5 = 1;
showSlides5(slideIndex5);

document.querySelector(".prev5").addEventListener("click", function() {
  plusSlides5(-1);
});

document.querySelector(".next5").addEventListener("click", function() {
  plusSlides5(1);
});

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function showSlides5(n) {
  var i;
  var slides5 = document.getElementsByClassName("slides5")[0].getElementsByClassName("slide5");
  if (n > slides5.length) {
    slideIndex5 = 1;
  }
  if (n < 1) {
    slideIndex5 = slides5.length;
  }
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  slides5[slideIndex5-1].style.display = "flex";


  
}
