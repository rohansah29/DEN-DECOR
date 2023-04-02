function myfun(){
    window.location.href = "Allproduct.html";
}
// nav bar javascript

// let endpoint=JSON.parse(localStorage.getItem("endpoint")) || [];
let sofass = document.getElementById("sofa")

sofass.addEventListener("click", (e) => {
    e.preventDefault()
    endpoint = [];
    endpoint.push("Sofas");
    localStorage.setItem("endpoint", JSON.stringify(endpoint));


})
let liv = document.getElementById("live")

liv.addEventListener("click", (e) => {
    e.preventDefault()
    endpoint = [];
    endpoint.push("Living");
    localStorage.setItem("endpoint", JSON.stringify(endpoint));




})

let beds = document.getElementById("bed")

beds.addEventListener("click", (e) => {
    e.preventDefault()
    endpoint = [];
    endpoint.push("Bedroom");
    localStorage.setItem("endpoint", JSON.stringify(endpoint));




})

let dine = document.getElementById("Din")

dine.addEventListener("click", (e) => {
    e.preventDefault()
    endpoint = [];
    endpoint.push("Dining");
    localStorage.setItem("endpoint", JSON.stringify(endpoint));




})
let stor = document.getElementById("sto")

stor.addEventListener("click", (e) => {
    e.preventDefault()
    endpoint = [];
    endpoint.push("Storage");
    localStorage.setItem("endpoint", JSON.stringify(endpoint));




})


let stud = document.getElementById("std")

stud.addEventListener("click", (e) => {
    e.preventDefault()
    endpoint = [];
    endpoint.push("Study");
    localStorage.setItem("endpoint", JSON.stringify(endpoint));




})



let lig = document.getElementById("ld")

lig.addEventListener("click", (e) => {
    e.preventDefault()
    endpoint = [];
    endpoint.push("Lighting");
    localStorage.setItem("endpoint", JSON.stringify(endpoint));




})

// popular accross site


var slideIndex4 = 1;
showSlides4(slideIndex4);

document.querySelector(".prev4").addEventListener("click", function () {
    plusSlides4(-1);
});

document.querySelector(".next4").addEventListener("click", function () {
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
    slides4[slideIndex4 - 1].style.display = "flex";



}

//   customer stories javascript

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





// mainSection javascript


let productName = JSON.parse(localStorage.getItem("endpoint"));

let mainSection = document.getElementById("mainSection");

let title = document.getElementById("title");
title.innerText = productName;
let pagination = document.getElementById("pagination-wrapper");

let page = 1;

let fetchedData = [];
fetchandrender(page, productName);

function fetchandrender(page, productName) {
    fetch(`https://den-decor.onrender.com/${productName}?_limit=6&_page=${page}`)
        .then((res) => {

            let totalpost = res.headers.get("X-Total-Count")
            let totalbtn = Math.ceil(totalpost / 6);
            // console.log(totalbtn);

            pagination.innerHTML = null;

            for (let i = 1; i <= totalbtn; i++) {
                pagination.append(getbtn(i, i));
            }

            // let buttons = document.getElementsByClassName("btns");
            return res.json();
        })
        .then((data) => {
            console.log(data);
            fetchedData = data;
            Display(data);
        })
        .catch((err) => {
            console.log(err);
        })
}


function getbtn(id, text) {
    let btn = document.createElement("button");
    btn.classList.add("btns");
    btn.setAttribute("data-id", id);
    btn.innerText = text;

    btn.addEventListener("click", () => {
        fetchandrender(id);
    })
    return btn
}


function Display(data) {
    // console.log(data);
    let x = ``;
    data.forEach(item => {
        x += `
        <div class="cards">
            <img src="${item.image}" alt="img">
            <h2>${item.title}</h2>
            <p>Description-Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, cum?</p>
            <h4>Starting From ₹- ${item.price}/-</h4>
            <p>EMI Starts From - ₹ 3,999/-</p>
            <p>Discount - <span>₹ ${item.discount}/-</span></p>
            <button class="comparebtn">ADD TO COMPARE</button>
            <button data-id=${item.id} class="optionbtn"><a data-id=${item.id} class="optionanc" href="./product.html" target="_blank">VIEW PRODUCT</a></button>
        </div>`
    });

    mainSection.innerHTML = x;

    let viewproducts = document.getElementsByClassName("optionanc");
    // console.log(viewproducts);

    for (let i = 0; i < viewproducts.length; i++) {
        viewproducts[i].addEventListener("click", (e) => {
            let selectid = e.target.dataset.id;
            // console.log(e.target.dataset.id);
            // console.log(fetchedData);

            let selectedproduct = fetchedData.filter((item) => {
                return item.id == selectid;
            })
            // console.log(selectedproduct);
            localStorage.setItem("selectedproduct", JSON.stringify(selectedproduct));
        })
    }

}




// filter functionality


// filter by price

let p0 = document.getElementById("p0");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");

let fetchedData1=[];

fetch(`https://den-decor.onrender.com/${productName}`)
.then((res) => {

    let totalpost = res.headers.get("X-Total-Count")
    let totalbtn = Math.ceil(totalpost / 6);
    // console.log(totalbtn);

    // let buttons = document.getElementsByClassName("btns");
    return res.json();
})
.then((data) => {
    console.log(data);
    fetchedData1 = data;
})
.catch((err) => {
    console.log(err);
})

p0.addEventListener("click", () => {
    Display(fetchedData);
})

p1.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.price >= 8000 && ele.price <= 50000;
    })
    console.log(filtered);
    Display(filtered);

})

p2.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.price >= 50001 && ele.price <= 90000;
    })
    console.log(filtered);
    Display(filtered);

})

p3.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.price >= 90001 && ele.price <= 130000;
    })
    console.log(filtered);
    Display(filtered);

})

p4.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.price >= 130001 && ele.price <= 180000;
    })
    console.log(filtered);
    Display(filtered);

})

p5.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.price >= 180001 && ele.price <= 220000;
    })
    console.log(filtered);
    Display(filtered);

})



// filter by brand

// let dropbtn = document.getElementById("dropbtn");
let b0 = document.getElementById("b0");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
// console.log(b1.checked);


b0.addEventListener("click", () => {
    Display(fetchedData);
})


b1.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.brand === b1.value
    })
    console.log(filtered);
    Display(filtered);

})

b2.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.brand === b2.value
    })
    console.log(filtered);
    Display(filtered);

})

b3.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.brand === b3.value
    })
    console.log(filtered);
    Display(filtered);

})

b4.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.brand === b4.value
    })
    console.log(filtered);
    Display(filtered);

})

b5.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.brand === b5.value
    })
    console.log(filtered);
    Display(filtered);

})


// filter by Material

let m0 = document.getElementById("m0");
let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
let m4 = document.getElementById("m4");


m0.addEventListener("click", () => {
    Display(fetchedData);
})

m1.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.material === m1.value
    })
    console.log(filtered);
    Display(filtered);

})

m2.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.material === m2.value
    })
    console.log(filtered);
    Display(filtered);

})

m3.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.material === m3.value
    })
    console.log(filtered);
    Display(filtered);

})

m4.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.material === m4.value
    })
    console.log(filtered);
    Display(filtered);

})



// filter by Capacity

let c0 = document.getElementById("c0");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");


c0.addEventListener("click", () => {

    Display(fetchedData);
})

c1.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.capacity == c1.value
    })
    console.log(filtered);
    Display(filtered);

})

c2.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.capacity == c2.value
    })
    console.log(filtered);
    Display(filtered);

})

c3.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.capacity == c3.value
    })
    console.log(filtered);
    Display(filtered);

})

c4.addEventListener("click", () => {

    let filtered = fetchedData1.filter((ele) => {
        return ele.capacity == c4.value
    })
    console.log(filtered);
    Display(filtered);

})



// Sort functionality

let s0 = document.getElementById("s0");
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");



s0.addEventListener("click", () => {

    fetchandrender();
})



s1.addEventListener("click", () => {

    let sorted = fetchedData1.sort((a, b) => {
        return a.price - b.price
    })
    console.log(sorted);
    Display(sorted);

})

s2.addEventListener("click", () => {


    let sorted = fetchedData1.sort((a, b) => {
        return b.price - a.price
    })
    console.log(sorted);
    Display(sorted);

})

s3.addEventListener("click", () => {

    let sorted = fetchedData1.sort((a, b) => {
        return b.discount - a.discount
    })
    console.log(sorted);
    Display(sorted);

})

