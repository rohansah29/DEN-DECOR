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