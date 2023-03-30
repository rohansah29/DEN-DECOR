{
    // let currUser=JSON.parse(localStorage.getItem('signedUpUsers'))[0]; 
    // localStorage.setItem('currUser',JSON.stringify(currUser))
  
  
    let currUser = JSON.parse(localStorage.getItem('currUser'))
    if (currUser) {
      document.querySelector('#comp2 span').textContent = currUser.si7EmailID;
      // console.log(currUser.si7EmailID)
      // currUser.si7EmailID
  
      let chCirclesCounter = 1;
      let chCircles = document.querySelectorAll('#chCircles')
      chCircles.forEach(function (el) {
        el.textContent = chCirclesCounter++;
      })
      chCircles[0].innerHTML = '<i class="fas fa-check"></i>'
      let chComp3Area = document.getElementById('chComp3Area')
      let chComp3AreaFinal = document.getElementById('chComp3AreaFinal')
      let chComp3Form = document.getElementById('chComp3Form')
  
      document.getElementById('chComp3FormSubBtn').addEventListener('click', function (e) {
        e.preventDefault();
        let notFilled = 0;
        for (let i = 0; i < chComp3Form.length - 2; i++) {
          if (chComp3Form[i].value == '') {
            notFilled = 1;
            // console.log(notFilled,chComp3Form[i].value)
          } else if (i == 4 && chComp3Form[i].value.length != 10) notFilled = 2;
          else if (i == 6 && chComp3Form[i].value.length != 6) notFilled = 3;
        }
        if (notFilled == 1) alert('Please fill in all details!')
        if (notFilled == 2) alert('Phone number should be 10 digits long!')
        if (notFilled == 3) alert('Pincode should be 6 digits long!')
        else if (notFilled == 0) {
          // alert('All good!')    
          let chDetails = {};
          chDetails.Name = chComp3Form[1].value
          chDetails.PhNo = chComp3Form[4].value
          chDetails.Email = chComp3Form[3].value
          chDetails.Address = chComp3Form[9].value
          chDetails.City = chComp3Form[8].value + ' - ' + chComp3Form[6].value
          chDetails.State = chComp3Form[7].value + ' , ' + chComp3Form[5].value
          // console.log(chDetails)
          let chComp3Tr = document.querySelectorAll('#chComp3AreaFinal tbody tr');
          let counter = 0;
          //column1
          let chComp3col1 = ['Name', 'PhNo', 'Email'];
          let chComp3col2 = ['Address', 'City', 'State'];
          for (let i = 0; i < chComp3Tr.length; i++) {
            let chComp3td1 = document.createElement('td')
            chComp3td1.textContent = chDetails[chComp3col1[counter]];
            let chComp3td2 = document.createElement('td')
            chComp3td2.textContent = chDetails[chComp3col2[counter++]];
            chComp3Tr[i].append(chComp3td1, chComp3td2)
          }
          chComp3Area.style.display = 'none'
          chComp3AreaFinal.style.display = 'block'
          chCircles[1].innerHTML = '<i class="fas fa-check"></i>';
          document.getElementById('comp4ReviewKid').style.display = 'block';
        }
  
  
  
  
  
      })
  
      var cartArr = JSON.parse(localStorage.getItem('cartArr')) || [];
      displayCards(cartArr);
  
      // *****************************Code from cart.js******************
      function displayCards(cArr) {
        cArr.map(function (cartProd) {
          let caCardTop = document.createElement('div');
          caCardTop.setAttribute('class', 'caCardTop')
          // cardb
          {
            var caCardb = document.createElement('div');
            let caCardbImg = document.createElement('img');
            caCardbImg.src = cartProd.prod.pImageArray[0];
            let caCardb2 = document.createElement('div');
            caCardb2.setAttribute('class', 'caCardb2');
            let caCardbName = document.createElement('h4');
            caCardbName.textContent = cartProd.prod.pName;
            let caCardbCode = document.createElement('h5');
            caCardbCode.textContent = cartProd.prod.pCode;
            let caCardbMRP = document.createElement('h4');
            caCardbMRP.innerHTML = '<span><i class="fas fa-rupee-sign"></i>' + cartProd.prod.pMRP + '</span>&nbsp&nbsp&nbsp;<i class="fas fa-rupee-sign"></i>' + ((100 - cartProd.prod.pOffer) / 100) * cartProd.prod.pMRP + "<span id='caCardbOff'>(" + cartProd.prod.pOffer + "% off)</span>";
            // let caCardbWish=document.createElement('select');  
            // caCardbWish.setAttribute('class','caCardbWish');
            //   let options=document.createElement('option');
            //   options.textContent='Move To Wishlist'                
            // caCardbWish.append(options)
            caCardb2.append(caCardbName, caCardbCode, caCardbMRP)
            caCardb.append(caCardbImg, caCardb2);
            caCardb.setAttribute('class', 'caCardb')
          }
          // cardc
  
          {
            var caCardc = document.createElement('div');
            let caCardc2 = document.createElement('div');
            caCardc2.textContent = cartProd.qty
            caCardc.append(caCardc2);
            caCardc2.setAttribute('class', 'caCardc2')
          }
          // cardd
          {
            var caCardd = document.createElement('div');
            calcTotal();
  
            function calcTotal() {
  
              caCardd.innerHTML = '<i class="fas fa-rupee-sign"></i>' + ((100 - cartProd.prod.pOffer) / 100) * cartProd.prod.pMRP * cartProd.qty;
  
            }
            caCardd.setAttribute('class', 'caCardd')
          }
          // carde
          {
            var caCarde = document.createElement('div');
            caCarde.textContent = 'FREE';
            caCarde.setAttribute('class', 'caCarde')
          }
  
  
          caCardTop.append(caCardb, caCardc, caCardd, caCarde);
  
          let hr = document.createElement('hr')
          hr.style.border = '2px solid #D1D1D1'
          let br = document.createElement('br')
  
          caComp1CardSection.append(caCardTop, hr, br)
  
        })
  
  
        // document.querySelector('#caComp1>h2 span').textContent=cartArr.reduce(function(acc,el){
        //   return acc+Number(el.qty);
        // },0)
  
      }
  
  
      let caComp2cTdEls = document.querySelectorAll('#caComp2c>table td')
      let caComp2cTdValues = JSON.parse(localStorage.getItem('checkoutObj'))
      document.getElementById('comp5PayTextArea').style.display = 'none'
  
      caComp2cTdEls[1].innerHTML = caComp2cTdValues.orderTotal;
      caComp2cTdEls[3].innerHTML = caComp2cTdValues.orderDisc;
      caComp2cTdEls[5].innerHTML = caComp2cTdValues.orderPromo;
      caComp2cTdEls[7].innerHTML = 'FREE';
      caComp2cTdEls[9].innerHTML = caComp2cTdValues.orderYouPay;
      caComp2cTdEls[12].innerHTML = caComp2cTdValues.orderSave;
      caComp2cTdEls[12].style.color = 'red';
      caComp2cTdEls[12].style.fontWeight = '600';
      caComp2cTdEls[11].style.color = 'red';
  
  
      document.querySelector('#cartSection button').addEventListener('click', function () {
        // alert('Lets Pay!!')
        chCircles[2].innerHTML = '<i class="fas fa-check"></i>';
        document.getElementById('comp4ReviewKid').style.display = 'none';
        document.getElementById('comp5PayTextArea').style.display = 'flex'
      })
  
  
      // *****************************Code from cart.js ends******************
  
      document.querySelector('#comp5PayTextArea>div:nth-child(2)>div:nth-child(1)').innerHTML = `Amount payable is <span>${caComp2cTdValues.orderYouPay}</span>`
  
  
  
      let comp5PayTextAreaForm = document.getElementById('comp5PayTextAreaForm')
      comp5PayTextAreaForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (comp5PayTextAreaForm.comp5Card.value == '' || comp5PayTextAreaForm.comp5Exp.value == '' || comp5PayTextAreaForm.comp5CVV.value == '' || comp5PayTextAreaForm.comp5Name.value == '')
          alert('Please fill all fields!')
        else {
          if (comp5PayTextAreaForm.comp5Card.value.length != 16) alert('Card Number should be 16 digits long!')
          else if (comp5PayTextAreaForm.comp5CVV.value.length != 3) alert('CVV should be 3 digits long!')
          else {
            alert('Order successfully placed!! 🎉🎉🎉')
            localStorage.removeItem('cartArr');
            window.location.href = 'homePage.html';
          }
  
        }
  
  
  
  
      })
  
  
  
  
  
  
  
  
  
  
  
     } 
   else {
      // alert('Please log in!!')
      window.location.href = 'login.html';
  
    }
  
  
  
  
  
  
  
  }