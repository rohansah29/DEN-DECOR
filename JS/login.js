// console.log("hi");
// var signedUpUsers = JSON.parse(localStorage.getItem('signedUpUsers')) || [];


//   var lo1Mobile=document.querySelector('.lo4Choice>h4:nth-child(1)');
//   var lo13Email=document.querySelector('.lo4Choice>h4:nth-child(2)');
//   var lo12OutHTML=document.getElementById('lo12Out').innerHTML;
  
//   //By default mobile is underlined
//   lo1Mobile.setAttribute('class','lo5underline');

//   lo13Email.addEventListener('click',function(){    
//     lo1Mobile.removeAttribute('class','lo5underline');
//     lo13Email.setAttribute('class','lo5underline');
//     // lo12OutHTML=document.getElementById('lo12Out').innerHTML;
//     document.getElementById('lo12Out').innerHTML=`
//     <h4>LOGIN USING E-MAIL ID AND OTP</h4>
//     <input id='lo13Email' type="email" placeholder="E-MAIL ID*">    
//     `;
//     document.getElementById('lo12Out').style.width='200px'
//   })
//   lo1Mobile.addEventListener('click',function(){
//     lo13Email.removeAttribute('class','lo5underline');
//     lo1Mobile.setAttribute('class','lo5underline');
//     document.getElementById('lo12Out').innerHTML=lo12OutHTML
//   })


//   var loAlt14OtpEl=document.getElementById('alt14OTP');
//   var loAlt15PassEl=document.getElementById('alt15Pass');
//   var lo17PassEl=document.querySelector('.lo17Pass');
//   var lo16OTPEl=document.querySelector('.lo16OTP');
//   var lo2Left=document.getElementById('lo2Left');
//   // console.log(loAlt14OtpEl,loAlt15PassEl,lo17PassEl,lo16OTPEl)

// // by default alternate OTP and Password card are removed
//   loAlt14OtpEl.remove();
//   lo17PassEl.remove();

//   document.querySelector('#alt15Pass>h4:nth-child(2)').addEventListener('click',function(){
//     lo16OTPEl.remove();
//     loAlt15PassEl.remove();
//     lo2Left.append(loAlt14OtpEl,lo17PassEl);   
//     lo17PassEl.children[0].style.width='80%' 
//     lo17PassEl.children[0].style.fontSize='25px';
//   })
//   // console.log(document.querySelector('#alt14OTP'))
//   loAlt14OtpEl.addEventListener('click',function(){    
//     loAlt14OtpEl.remove();
//     lo17PassEl.remove();
//     lo2Left.append(lo16OTPEl,loAlt15PassEl);  
//     // document.querySelector('#alt15Pass>h4').style.backgroundColor='red'    
//     // .style.backgroundColor='red'
//     lo16OTPEl.children[0].style.fontSize='25px';
//   })

//Login Via OTP and on clicking Request OTP

  // document.getElementById('lo6ReqOtpBtn1').addEventListener('click',function(){
  //   if(!document.getElementById('lo13Email')){
  //     let number=document.getElementById('lo9PhNo').value;
  //     // console.log(typeof document.getElementById('lo8Code').value)
  //     if(number==''||number.length!=10) alert('Please enter valid phone number!')    
  //     else{
  //       number=document.getElementById('lo8Code').value+number;
  //       // alert(number);
  //       var found=0;
  //       for(let i=0;i<signedUpUsers.length && found==0;i++){
  //         if(signedUpUsers[i].si5Code+signedUpUsers[i].si6MobNo==number){
  //           // alert('logged in');
  //           localStorage.setItem('currUser',JSON.stringify(signedUpUsers[i]))            
  //           window.location.href='OTP.html';
            
  //           found=1;
  //         }
  //       }
  //       if(found==0) alert('Phone number entered is not registered with us. You can register for a new account (or) try to login with other login options.')
  //     }
  //   }else{
  //     let email=document.getElementById('lo13Email').value;
  //     // console.log(typeof document.getElementById('lo8Code').value)
  //     if(email==''||email.indexOf("@")==-1) alert('Please enter valid email id!')    
  //     else{        
  //       // alert(email);
  //       var found=0;
  //       for(let i=0;i<signedUpUsers.length && found==0;i++){
  //         if(signedUpUsers[i].si7EmailID==email){
  //           // alert('logged in');
  //           localStorage.setItem('currUser',JSON.stringify(signedUpUsers[i]))            
  //           window.location.href='OTP.html';
            
  //           found=1;
  //         }
  //       }
  //       if(found==0) alert('Email id entered is not registered with us. You can register for a new account (or) try to login with other login options.')

  //     }
  //   }
  // })


  //Login Via Password and on clicking Request OTP

  // lo17PassEl.children[2].addEventListener('click',function(){
  //   // alert('asd')
  //   let passMail=document.getElementById('lo10PassMail').value;
  //   let passPassword=document.getElementById('lo11Pass').value;
  //   if(passMail==''||passMail.indexOf("@")==-1) alert('Please enter valid email!')
  //   else if(passPassword=='')alert('Please enter password!')
  //   else{
  //     // alert(`${typeof passMail}>${typeof passPassword}`);
  //     var found=0;
  //       for(let i=0;i<signedUpUsers.length && found==0;i++){          
  //         if(signedUpUsers[i].si7EmailID===passMail && signedUpUsers[i].si8Pass===passPassword){
  //            alert('logged in');
  //           localStorage.setItem('currUser',JSON.stringify(signedUpUsers[i]))            
  //           window.location.href='index.html';         
            
  //           found=1;
  //         }
  //       }
  //       if(found==0) alert('The specified Login ID or password are not correct. Verify the information provided and log in again.')

  //   }
  // })

  //On clicking signup button
  document.querySelector('#lo3Right>div>div').addEventListener('click',function(){
    // alert('asd');    
    window.location.href='signup.html'
    
      // window.location.href='login_admin.html';
     
  })
  let passMail=document.getElementById('lo10PassMail');
  let passPassword=document.getElementById('lo11Pass');

  let tokenData = JSON.parse(localStorage.getItem("token")) || [];
  let cart = JSON.parse(localStorage.getItem("cart"));
let sub= document.getElementById("lo7ReqOtpBtn2");
// console.log(sub);
sub.addEventListener("click",loginUser);

let dataArr=[];
async function loginUser(){
  const obj={
    email:passMail.value,
    password:passPassword.value
  };
  try {
    let res = await fetch(`https://den-decor.onrender.com/users`);
    let data = await res.json();
    //    console.log(data);
    data.forEach((item) => {
      let obj = {
        email: item.email,
        password: item.password,
      };
      dataArr.push(obj);
    });
    console.log(dataArr);
    let load = false;
    for (let i = 0; i < dataArr.length; i++) {
      let count = 0;
      for (let el in dataArr[i]) {
        for (let key in obj) {
          if (obj[key] === dataArr[i][el]) {
            count++;
          }
        }
      }
      if (count == 2) {
        load = true;
        break;
      }
    }
    if (load) {
      tokenData.push("logged");
      localStorage.setItem("token", JSON.stringify(tokenData));
      if(cart===null){
        window.location.assign("index.html");
      }else{
        window.location.assign("cart.html");
      }
      ``
      alert(" Signed In Successfully!");
    } else {
      alert("Wrong Credentials,login failed!");
    }
  } catch (error) {
    console.log(error);
  }
}
