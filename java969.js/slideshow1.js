function slideshowFun(movieImages){

    
}

// Use the following data for slideshow
var movieImages = [
  "https://www.ulcdn.net/media/Slideshow/Set-the-scene-slideshow.jpg?1679855163",
  "https://www.ulcdn.net/media/Slideshow/Swing-in-action-Slideshow.jpg?1679059226",
  "https://www.ulcdn.net/media/Slideshow/Beds-slideshow-2.jpg?1679042844",
  "https://www.ulcdn.net/media/Slideshow/Dining-slideshow-3.jpg?1679042848",
  "https://www.ulcdn.net/media/Slideshow/UI-Main-Banners-Slideshow_17th.jpg?1679055928"
]
let img=document.createElement("img")
img.src= movieImages[0]
//  img.setAttribute("src",movieImages[0])

 let show=document.getElementById("slideshow1")
 show.append(img)

let i=0

window.addEventListener("load", function () {



  
  setInterval(()=>{
   if(i==movieImages.length){
        i=0;
   }
   img.setAttribute("src",movieImages[i])
   i++
   
  
  },1800);
  
  
  });