var slideIndex4 = 1;
showSlides4(slideIndex4);

document.querySelector(".prev4").addEventListener("click", function() {
  plusSlides4(-1);
});

document.querySelector(".next4").addEventListener("click", function() {
  plusSlides4(1);
});

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("slides4")[0].getElementsByClassName("slide4");
  if (n > slides4.length) {
    slideIndex4 = 1;
  }
  if (n < 1) {
    slideIndex4 = slides4.length;
  }
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slides4[slideIndex4-1].style.display = "flex";


  
}
