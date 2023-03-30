
let productName = JSON.parse(localStorage.getItem("productname"));

let mainSection = document.getElementById("mainSection");

let title = document.getElementById("title");
// title.innerText = productName;
let pagination = document.getElementById("pagination-wrapper");

let page = 1;

let fetchedData = [];
fetchandrender(page, productName);

function fetchandrender(page, productName) {
    fetch(`https://den-decor.onrender.com/Sofas?_limit=6&_page=${page}`)
        .then((res) => {

            let totalpost = res.headers.get("X-Total-Count")
            let totalbtn = Math.ceil(totalpost/6);
            console.log(totalbtn);
    
            pagination.innerHTML = null;

            for( let i=1 ; i<=totalbtn ; i++)
            {
               pagination.append(getbtn(i,i));
            }
            
            // let buttons = document.getElementsByClassName("btns");
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            fetchedData = data;
            Display(data);
        })
        .catch((err) => {
            console.log(err);
        })
}


function getbtn(id,text){
    let btn = document.createElement("button");
    btn.classList.add("btns");
    btn.setAttribute("data-id",id);
    btn.innerText = text;

    btn.addEventListener("click",()=>{
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
            <button data-id=${item.id} class="optionbtn">VIEW PRODUCT</button>
        </div>`
    });

    mainSection.innerHTML = x;

}


// filter functionality


// filter by price

let p0 = document.getElementById("p0");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");

p0.addEventListener("click",()=>{
    Display(fetchedData);
})

p1.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.price >=8000 && ele.price <=50000;
    })
    console.log(filtered);
    Display(filtered);

})

p2.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.price >=50001 && ele.price <=90000;
    })
    console.log(filtered);
    Display(filtered);

})

p3.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.price >=90001 && ele.price <=130000;
    })
    console.log(filtered);
    Display(filtered);

})

p4.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.price >=130001 && ele.price <=180000;
    })
    console.log(filtered);
    Display(filtered);

})

p5.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.price >=180001 && ele.price <=220000;
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


b0.addEventListener("click",()=>{
    Display(fetchedData);
})


b1.addEventListener("click", () => {

    let filtered = fetchedData.filter((ele) => {
        return ele.brand === b1.value
    })
    console.log(filtered);
    Display(filtered);

})

b2.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.brand === b2.value
    })
    console.log(filtered);
    Display(filtered);

})

b3.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.brand === b3.value
    })
    console.log(filtered);
    Display(filtered);

})

b4.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.brand === b4.value
    })
    console.log(filtered);
    Display(filtered);

})

b5.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
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


m0.addEventListener("click",()=>{
    Display(fetchedData);
})

m1.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.material === m1.value
    })
    console.log(filtered);
    Display(filtered);

})

m2.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.material === m2.value
    })
    console.log(filtered);
    Display(filtered);

})

m3.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.material === m3.value
    })
    console.log(filtered);
    Display(filtered);

})

m4.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
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


c0.addEventListener("click",()=>{

    Display(fetchedData);
})

c1.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.capacity == c1.value
    })
    console.log(filtered);
    Display(filtered);

})

c2.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.capacity == c2.value
    })
    console.log(filtered);
    Display(filtered);

})

c3.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
        return ele.capacity == c3.value
    })
    console.log(filtered);
    Display(filtered);

})

c4.addEventListener("click", () => {
    
    let filtered = fetchedData.filter((ele) => {
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



s0.addEventListener("click",()=>{

    fetchandrender();
})



s1.addEventListener("click", () => {
    
    let sorted = fetchedData.sort((a,b)=>{
        return a.price - b.price
    })
    console.log(sorted);
    Display(sorted);

})

s2.addEventListener("click", () => {
    
    
    let sorted = fetchedData.sort((a,b)=>{
        return b.price - a.price
    })
    console.log(sorted);
    Display(sorted);

})

s3.addEventListener("click", () => {
    
    let sorted = fetchedData.sort((a,b)=>{
        return b.discount - a.discount
    })
    console.log(sorted);
    Display(sorted);

})

