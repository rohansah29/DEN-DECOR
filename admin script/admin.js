let adminName = JSON.parse(localStorage.getItem("adName"));

// console.log(adminName[0]);
let h3 = document.getElementById("naam");
h3.innerText = `${adminName[0]}`;

function logout() {
  alert("Do you really want to logout?");
  window.location.href = "login_admin.html";
}

let keyName = JSON.parse(localStorage.getItem("product")) || [];
// function dashboard(){
//     keyName=[];
//     keyName.push("/");
//     localStorage.setItem("product",JSON.stringify(keyName));
// }

function sofas() {
  keyName = [];
  keyName.push("Sofas");
  localStorage.setItem("product", JSON.stringify(keyName));
}

function living() {
  keyName = [];
  keyName.push("Living");
  localStorage.setItem("product", JSON.stringify(keyName));
}

function bedroom() {
  keyName = [];
  keyName.push("Bedroom");
  localStorage.setItem("product", JSON.stringify(keyName));
}

function dining() {
  keyName = [];
  keyName.push("Dining");
  localStorage.setItem("product", JSON.stringify(keyName));
}

function storage() {
  keyName = [];
  keyName.push("Storage");
  localStorage.setItem("product", JSON.stringify(keyName));
}

function study() {
  keyName = [];
  keyName.push("Study");
  localStorage.setItem("product", JSON.stringify(keyName));
}

function lighting() {
  keyName = [];
  keyName.push("Lighting");
  localStorage.setItem("product", JSON.stringify(keyName));
}

function orders() {
  keyName = [];
  keyName.push("orders");
  localStorage.setItem("product", JSON.stringify(keyName));
}

let h1 = document.getElementById("til");
h1.innerText = `${keyName[0]} Data`;


let mainSection = document.getElementById("displayshirtItem");
let pagination = document.getElementById("pagination-wrapper");

async function fetchAndRender(pageNum) {
  try {
    let res = await fetch(`https://den-decor.onrender.com/${keyName[0]}?_limit=4&_page=${pageNum}`);
    mainSection.innerText = "";
    pagination.innerText = "";
    let totalItems = res.headers.get("X-Total-Count");

    let totalButtons = Math.ceil(totalItems / 4);
    for (let i = 1; i <= totalButtons; i++) {
      pagination.append(button(i));
    }
    let data = await res.json();
    console.log(data);
    renderCardList(data);
  } catch (error) {
    console.log("error");
  }
}
fetchAndRender();

function button(i) {
  let btn = document.createElement("button");
  btn.id = "btn";
  btn.setAttribute("data-id", i);
  btn.classList.add("pagination-button");
  btn.innerText = i;
  btn.addEventListener("click", (e) => {
    // console.log(e);
    fetchAndRender(e.target.dataset.id);
  });
  return btn;
}
//Dynamically Fetch all products based on keys present.
const fetchAllTotal = new Promise(
  (resolve, reject) => {
    let keys = ["Sofas", "Living", "Bedroom", "Dining", "Storage", "Study", "Lighting", "orders"];
    let promiseQueue = [];
    let dataQueue = [];

    keys.forEach((key) => {
      promiseQueue.push(fetch(`https://den-decor.onrender.com/${key}`));
    })

    Promise.all(promiseQueue)
      .then((values) => {
        console.log("Promise Queue", values);
        values.map(res => dataQueue.push(res.json()));

        Promise.all(dataQueue)
          .then(dataArray => {
            let total = dataArray.map(data => data.length).reduce((a, b) => a + b);
            console.log(total);
            resolve(total);
          })

      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });

  const fetchAllTotal2 = new Promise(
    (resolve, reject) => {
      let keys = ["Sofas", "Living", "Bedroom", "Dining", "Storage", "Study", "Lighting", "orders"];
      let promiseQueue = [];
      let dataQueue = [];
  
      Promise.all(
        keys.map((key) =>fetch(`https://den-decor.onrender.com/${key}`)))
      .then(values=>{
        Promise.all(
          values.map(res => dataQueue.push(res.json())))
          .then(dataArray => {
          let total = dataArray.map(data => data.length).reduce((a, b) => a + b);
          console.log(total);
          resolve(total);
        })

      })
    });

async function getAllProductLength() {
  fetchAllTotal.then(result => {
    console.log("GetAllProduct: ", result)
    document.getElementById("total-product").innerText = result;
  });
}
getAllProductLength();

async function total() {
  try {
    let res = await fetch(`https://den-decor.onrender.com/${keyName[0]}`);
    let data = await res.json();
    console.log("Data:", data)
    displayTotal(data);
  } catch (error) {
    console.log("error");
  }
}
total();


function displayTotal(data) {
  document.getElementById("renderShirt").innerText = `Total Available Products - ${data.length}`
}

async function getUserNum() {
  let res = await fetch("https://den-decor.onrender.com/users");
  let data = await res.json();
  displayTotalUser(data)
}
getUserNum();
function displayTotalUser(totalUser) {
  if (document.getElementById("total-user"))
    document.getElementById("total-user").innerText = totalUser.length;
}




function renderCardList(data) {
  // console.log(data);
  let x = ``;
  let ar = [];
  data.forEach(item => {
    x += `
        <div class="cards">
        <img src="${item.image}" alt="img">
        <h2>${item.title}</h2>
        <p>Capacity-${item.capacity}</p>
        <p>Brand-${item.brand}</p>
        <p>Material-${item.material}</p>
        <p>-Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, cum?</p>
        <h4>Starting From ₹- ${item.price}/-</h4>
        <p>Discount - <span>₹ ${item.discount}/-</span></p>
        <button class="comparebtn">Edit</button>
        <button data-id=${item.id} class="optionbtn" id="dele-${item.id}" >Delete</button>
        </div>`
    ar.push(`dele-${item.id}`);
  });

  mainSection.innerHTML = x;
  console.log(ar);
  ar.forEach(item => {
    document.getElementById(item).addEventListener("click", async (e) => {
      // console.log(e.target.dataset.id);
      try {
        let response = await fetch(`https://den-decor.onrender.com/${keyName[0]}/${e.target.dataset.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        let d = await response.json();
        console.log(d);
        alert("Product Deleted!");
        location.reload();
      }
      catch (e) {
        console.log(e);
      }
    })
  })
}


// let title=document.getElementById("addtitle");
// let img=document.getElementById("addimg");
// let brand=document.getElementById("addbrand");
// let material=document.getElementById("addmaterial");
// let capacity=document.getElementById("addcapacity");
// let price=document.getElementById("addprice");
// let discount=document.getElementById("addmultibuyprice");
// let description=document.getElementById("adddescription");



