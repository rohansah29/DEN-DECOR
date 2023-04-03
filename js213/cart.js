
let selectedproduct = JSON.parse(localStorage.getItem("selectedproduct"));

let cart = JSON.parse(localStorage.getItem("cart"));

// console.log(cart);

let maincontainer = document.getElementById("main_container");

Display(cart);
function Display(data) {
  console.log(data);
  let x = ``;
  let y = `<div id="heading">
  <p id="p1">PRODUCTS</p>
  <p>DELIVERY DATE</p>
  <p>QUANTITY</p>
  <p>TOTAL</p>
</div>
<hr>
<br>`;

  let datearr = [];
  let quantityarr = [];

  data.forEach(item => {
    x += `
      <div class="cards">

      <div class="div1">

          <div class="img">

              <img src="${item.image}"
                  alt="">
              <div>
                  <button class="wishlistbtn">♡ Add to Wishlist</button>
              </div>

          </div>

          <div class="desc">

              <b>${item.title}</b>
              <br>
              <br>
              <img style="width: 5%;" src="./icons/hand-sapling-hope-svgrepo-com.svg" alt="">
              <label for="">You can cancel your order before shipped, and a full refund will be initiated.</label>

          </div>

      </div>

      <div class="div2">

          <p id="date-${item.id}"></p>

      </div>

      <div class="div3">

         <label>${item.quantity}</label>

      </div>

      <div class="div4">
          <div>
          <p>${item.price * item.quantity}</p>
          </div>

          <div>
          <button data-id="${item.id}" class="remove">REMOVE</button>
          </div>

         

      </div>

  </div>
  <br>
    <hr>
    <br>

    `
    datearr.push(`date-${item.id}`)
    quantityarr.push(`select${item.id}`)
  });

  maincontainer.innerHTML = y + x;

  // console.log(quantityarr);


  let removebtn = document.getElementsByClassName("remove");
  console.log(removebtn);

  for (let i = 0; i < removebtn.length; i++) {
    removebtn[i].addEventListener("click", (e) => {
      // console.log(e.target.dataset.id);
      let selectedid = e.target.dataset.id;

      let filtered = cart.filter((ele) => {
        // console.log(ele.id);
        return ele.id != selectedid;
      })
      // console.log(filtered);
      localStorage.setItem("cart", JSON.stringify(filtered));
      location.reload();
      Display(filtered);
    })
  }


  let totalitem = document.getElementById("totalitem");
  totalitem.innerText = cart.length;


  let pricetotal = 0;
  let shipping = document.getElementById("shipping");
  let discount = document.getElementById("discount");
  let finalpay = document.getElementById("finalpay")
  let yousave = document.getElementById("yousave");


  for (let i = 0; i < cart.length; i++) {
    pricetotal += cart[i].price * cart[i].quantity;
  }

  document.getElementById("pricetotal").innerText = pricetotal

  let randomNumber1 = Math.floor(Math.random() * (1000 - 700 + 1)) + 700;
  let randomNumber2 = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
  if (cart.length === 0) {
    shipping.innerText = 0;
  }
  else {

    shipping.innerText = randomNumber1;
  }

  discount.innerText = randomNumber2;

  finalpay.innerText = Number(pricetotal) + Number(shipping.innerText) - Number(discount.innerText);

  yousave.innerText = discount.innerText













  function getdate() {


    const startDate = new Date(2023, 4, 1);
    const endDate = new Date(2023, 4, 30);


    const randomTimestamp = Math.floor(Math.random() * (endDate.getTime() - startDate.getTime())) + startDate.getTime();


    const randomDate = new Date(randomTimestamp);


    const year = randomDate.getFullYear();
    const month = randomDate.getMonth() + 1;
    const day = randomDate.getDate();

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return formattedDate;
  }


  for (let i = 0; i < datearr.length; i++) {
    document.getElementById(datearr[i]).innerText = `By : ${getdate()}`

  }








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

let proceed=document.getElementById("proceed");
proceed.addEventListener("click",()=>{
  window.location.href="checkout.html";
})


//orderSummaryCartSection
// {
let caVoucherApplied = 0, orderSave = 0, orderDisc = 0, caPromoApplied = 0, orderTot = 0;
let caComp2a = document.getElementById('caComp2a');
document.getElementById('caComp2b').addEventListener('click', function (e) {
  if (e.target.previousElementSibling.toString() == '[object HTMLInputElement]') {
    // alert('voucher')
    if (document.querySelector('#caComp2b input').value == 'masai10') {
      if (caVoucherApplied == 0) {
        alert('10% additional discount applied!!')
        caVoucherApplied = 1;

        if (caPromoApplied == 1) {
          caComp2cTd[7].innerHTML = '-' + '&nbsp&nbsp<i class="fas fa-rupee-sign"></i>' + Math.floor(orderTot * 0.4)
          //  orderSave+=Math.floor(orderTot*0.1)
        }
        else {
          caComp2cTd[7].innerHTML = '-' + '&nbsp&nbsp<i class="fas fa-rupee-sign"></i>' + Math.floor(orderTot * 0.1)
          // orderSave+=Math.floor(orderTot*0.1)
        }
        orderSave += Math.floor(orderTot * 0.1)
        caComp2cTd[12].innerHTML = '-' + '&nbsp&nbsp<i class="fas fa-rupee-sign"></i>' + (orderSave)
        caComp2cTd[9].innerHTML = '<i class="fas fa-rupee-sign"></i>' + Math.floor(orderTot - orderSave);
      } else {
        alert('Voucher already applied!!')
      }
    } else {
      alert('Invalid code!')
    }
  }
  else if (e.target.previousElementSibling.toString() == '[object HTMLSpanElement]') {
    if (caPromoApplied == 0) {
      // alert('promo')
      alert('30% additional discount applied!!')
      caPromoApplied = 1;

      if (caVoucherApplied == 1) {
        caComp2cTd[7].innerHTML = '-' + '&nbsp&nbsp<i class="fas fa-rupee-sign"></i>' + Math.floor(orderTot * 0.4)
        // orderSave+=Math.floor(orderTot*0.3)
      } else {
        caComp2cTd[7].innerHTML = '-' + '&nbsp&nbsp<i class="fas fa-rupee-sign"></i>' + Math.floor(orderTot * 0.3)
        // orderSave+=Math.floor(orderTot*0.3)
      }
      orderSave += Math.floor(orderTot * 0.3)
      caComp2cTd[12].innerHTML = '-' + '&nbsp&nbsp<i class="fas fa-rupee-sign"></i>' + (orderSave)
      caComp2cTd[9].innerHTML = '<i class="fas fa-rupee-sign"></i>' + Math.floor(orderTot - orderSave);
    }
  }
})

let caComp2bVoucherText = document.getElementById('caComp2b').innerHTML;
let caComp2bPromoText = `
                <div>
                <p>Select a promo code to use for this order</p>            
                <input type="radio" checked>&nbspMASAI30 <span>(Enjoy 30% Off)</span>
                <button>APPLY</button>
                <div>`

caComp2a.children[0].addEventListener('click', function () {
  // alert(1)
  document.getElementById('caComp2b').innerHTML = caComp2bVoucherText;
})


caComp2a.children[1].addEventListener('click', function () {
  // alert(2)
  document.getElementById('caComp2b').innerHTML = caComp2bPromoText
})


document.querySelector('#caComp2d>button').addEventListener('click', function () {
  // alert('checkout')
  // console.log(caComp2cTd[5].innerHTML)

  let checkoutObj = {
    orderTotal: caComp2cTd[1].innerHTML,
    orderDisc: caComp2cTd[5].innerHTML,
    orderPromo: caComp2cTd[7].innerHTML,
    orderYouPay: caComp2cTd[9].innerHTML,
    orderSave: caComp2cTd[12].innerHTML
  }
  localStorage.setItem('checkoutObj', JSON.stringify(checkoutObj));
  if (cartArr && cartArr.length != 0) window.location.href = 'checkout.html'
  else alert('Please add some Items..Your Cart is empty!!');
})

document.querySelector('#caComp2e').addEventListener('click', function () {
  window.location.href = 'homePage.html'
})

let caComp2cTd = document.querySelectorAll('#caComp2c>table td')

orderTot = (cartArr).reduce(function (acc, el) {
  return acc + el.prod.pMRP * el.qty;
}, 0)

// let caComp2cOrder
caComp2cTd[0].children[0].textContent = cartArr.reduce(function (acc, el) {
  return acc + Number(el.qty)
}, 0)

caComp2cTd[1].innerHTML = '&nbsp&nbsp<i class="fas fa-rupee-sign"></i>' + orderTot

// let caComp2cShip
caComp2cTd[3].textContent = 'FREE'

// let caComp2cDisc
orderDisc = (cartArr).reduce(function (acc, el) {
  return acc + (el.prod.pOffer / 100) * el.prod.pMRP * el.qty;
}, 0)

console.log(orderDisc)
caComp2cTd[5].innerHTML = '-' + '&nbsp&nbsp<i class="fas fa-rupee-sign"></i>' + Math.floor(orderDisc)
// let caComp2cPromo
caComp2cTd[7].innerHTML = '-' + '&nbsp&nbsp<i class="fas fa-rupee-sign"></i>' + 0;

// let orderPV=0;
// if(caPromoApplied==1){
//   orderPV=0.3;
//   caComp2cTd[7].innerHTML='-'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>'+orderTot*0.3
// }else if(caPromoApplied==1 && caVoucherApplied==1){
//   orderPV=0.4;
//   caComp2cTd[7].innerHTML='-'+'&nbsp&nbsp<i class="fas fa-rupee-sign"></i>'+orderTot*0.4
// }else {
//   orderPV=0;
// }

// let caComp2cPay
orderSave = Math.floor(orderDisc);
caComp2cTd[9].innerHTML = '<i class="fas fa-rupee-sign"></i>' + Math.floor(orderTot - orderSave);

// let caComp2cSave

caComp2cTd[12].innerHTML = '-' + '&nbsp&nbsp<i class="fas fa-rupee-sign"></i>' + (orderSave)
        // }


        let proceed1 = document.getElementById("proceed");

  let proceedarr=[];

  proceed1.addEventListener("click",()=>{
    proceedarr.push(pricetotal);
    proceedarr.push(shipping.innerText);
    proceedarr.push(discount.innerText);
    proceedarr.push(finalpay.innerText);
    proceedarr.push(yousave.innerText);

    localStorage.setItem("ordersummary",JSON.stringify(proceedarr));

  })