var slideIndex3 = 1;
showSlides3(slideIndex3);

document.querySelector(".prev3").addEventListener("click", function() {
  plusSlides3(-1);
});

document.querySelector(".next3").addEventListener("click", function() {
  plusSlides3(1);
});

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("slides3")[0].getElementsByClassName("slide3");
  if (n > slides3.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides3.length;
  }
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slides3[slideIndex3-1].style.display = "flex";


  
}
