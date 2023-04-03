

let min=1000,max=9999;
document.getElementById('si7OTPRand').value=Math.floor(Math.random()*(max-min)+min)
document.getElementById('si1form').addEventListener('submit',function(e){
  e.preventDefault();
  if(document.getElementById('si8OTP').value==''){
    alert('Please enter the given OTP!!')
  }else if(document.getElementById('si8OTP').value==document.getElementById('si7OTPRand').value){
    // alert('Cool!!')
    if (JSON.parse(localStorage.getItem('cartArr'))&&JSON.parse(localStorage.getItem('cartArr')).length>0)
      window.location.href = 'checkout.html'
    else      
      window.location.href='homePage.html'
  }else{
    alert('Incorrect OTP!!')
  }
  


}) 
  
