

let selectedproduct = JSON.parse(localStorage.getItem("selectedproduct"));

console.log(selectedproduct);


let title = document.getElementById("title11");
title.innerText = selectedproduct[0].title;

let brandname = document.getElementById("brandname");
brandname.innerText = selectedproduct[0].brand;

let image = document.getElementById("image1");
image.setAttribute("src",selectedproduct[0].image);

let price = document.getElementById("price");
price.innerText = `₹ ${selectedproduct[0].price} /-`;

let price1 = document.getElementById("price1");
price1.innerText = `₹ ${selectedproduct[0].price} /-`;

let Description = document.getElementById("desc1");
Description.innerText = selectedproduct[0].desc;


