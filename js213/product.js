

let selectedproduct = JSON.parse(localStorage.getItem("selectedproduct"));

let cart = JSON.parse(localStorage.getItem("cart")) || [];

console.log(selectedproduct);

let cartbtn = document.getElementById("cartbtn");

cartbtn.addEventListener("click",(e)=>{
    let select = document.getElementById("select");
    // console.log(select.value);
    // console.log(selectedproduct[0].id);
        if(cart.length === 0){
            selectedproduct[0].quantity = select.value
        cart.push(selectedproduct[0]);
        localStorage.setItem("cart",JSON.stringify(cart))
        alert("Added to cart");
        }
        else{
            let flag = true;

            let filteredcart = cart.filter((item)=>{
                if(item.id === selectedproduct[0].id){
                    flag = false;
                    alert("Already added in Cart !")
                }
            })
            
            if(flag)
            {
                selectedproduct[0].quantity = select.value
                cart.push(selectedproduct[0]);
                localStorage.setItem("cart",JSON.stringify(cart))
                alert("Added to cart");
            }
        }
})


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


