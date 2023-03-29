

var accepted=0; 
var signedUpUsers = JSON.parse(localStorage.getItem('signedUpUsers')) || [];
  console.log(signedUpUsers)
  document.querySelector('#si1form').addEventListener('submit',function(event){
    event.preventDefault(); 
    document.getElementById('si11mustAgree').addEventListener('change',function(){
      // alert('in')
      accepted=1;
      // console.log(accepted)
    })
    
    
    
    var si2title=document.getElementById('si2title').value;
    var si3firstName=document.getElementById('si3firstName').value;
    var si4lastName=document.getElementById('si4lastName').value
    var si5Code=document.getElementById('si5Code').value
    var si6MobNo=document.getElementById('si6MobNo').value
    var si7EmailID=document.getElementById('si7EmailID').value
    var si8Pass=document.getElementById('si8Pass').value
    if(si2title==''||si3firstName==''||si4lastName==''||si5Code==''||si6MobNo==''||si7EmailID==''||si8Pass=='')
    alert('Please enter all details!')
    else if(si6MobNo.length!=10){
      alert('Mobile number should be 10 digits long!')
    }else if(accepted==0){      
      alert('You must accept the terms & conditions and privacy policy to continue.')
    }else{     
      var si10Obj={si2title,si3firstName,si4lastName,si5Code,si6MobNo,si7EmailID,si8Pass}
      if(siAlreadySignedUp(si10Obj)){
        alert('You have already signed up!! Please log in with your credentials.')
        window.location.href='login.html';
      }else{
        signedUpUsers.push(si10Obj)     
        localStorage.setItem('signedUpUsers', JSON.stringify(signedUpUsers));
        alert('You have signed up!! Please log in with your credentials.')
        window.location.href='login.html';        
        
      }
    }
  })
function siAlreadySignedUp(si10Obj) {

  for (let user = 0; user < signedUpUsers.length; user++) {
    if ((signedUpUsers[user].si5Code == si10Obj.si5Code && signedUpUsers[user].si6MobNo == si10Obj.si6MobNo) || (signedUpUsers[user].si7EmailID == si10Obj.si7EmailID)) {
      return true;
    }
  }  
  
  
  for (let user = 0; user < signedUpUsers.length; user++){      
      if( signedUpUsers[user].si2title==si10Obj.si2title && signedUpUsers[user].si3firstName==si10Obj.si3firstName && signedUpUsers[user].si4lastName==si10Obj.si4lastName && signedUpUsers[user].si5Code==si10Obj.si5Code && signedUpUsers[user].si6MobNo==si10Obj.si6MobNo && signedUpUsers[user].si7EmailID==si10Obj.si7EmailID){
        return true;            
      }
    }
    return false;
  }  



  var accepted=0; 
var signedUpUsers = JSON.parse(localStorage.getItem('signedUpUsers')) || [];
  console.log(signedUpUsers)
  document.querySelector('#si1form').addEventListener('submit',function(event){
    event.preventDefault(); 
    document.getElementById('si11mustAgree').addEventListener('change',function(){
      // alert('in')
      accepted=1;
      // console.log(accepted)
    })
    
    
    
    var si2title=document.getElementById('si2title').value;
    var si3firstName=document.getElementById('si3firstName').value;
    var si4lastName=document.getElementById('si4lastName').value
    var si5Code=document.getElementById('si5Code').value
    var si6MobNo=document.getElementById('si6MobNo').value
    var si7EmailID=document.getElementById('si7EmailID').value
    var si8Pass=document.getElementById('si8Pass').value
    if(si2title==''||si3firstName==''||si4lastName==''||si5Code==''||si6MobNo==''||si7EmailID==''||si8Pass=='')
    alert('Please enter all details!')
    else if(si6MobNo.length!=10){
      alert('Mobile number should be 10 digits long!')
    }else if(accepted==0){      
      alert('You must accept the terms & conditions and privacy policy to continue.')
    }else{     
      var si10Obj={si2title,si3firstName,si4lastName,si5Code,si6MobNo,si7EmailID,si8Pass}
      if(siAlreadySignedUp(si10Obj)){
        alert('You have already signed up!! Please log in with your credentials.')
        window.location.href='login.html';
      }else{
        signedUpUsers.push(si10Obj)     
        localStorage.setItem('signedUpUsers', JSON.stringify(signedUpUsers));
        alert('You have signed up!! Please log in with your credentials.')
        window.location.href='login.html';        
        
      }
    }
  })
function siAlreadySignedUp(si10Obj) {

  for (let user = 0; user < signedUpUsers.length; user++) {
    if ((signedUpUsers[user].si5Code == si10Obj.si5Code && signedUpUsers[user].si6MobNo == si10Obj.si6MobNo) || (signedUpUsers[user].si7EmailID == si10Obj.si7EmailID)) {
      return true;
    }
  }  
  
  
  for (let user = 0; user < signedUpUsers.length; user++){      
      if( signedUpUsers[user].si2title==si10Obj.si2title && signedUpUsers[user].si3firstName==si10Obj.si3firstName && signedUpUsers[user].si4lastName==si10Obj.si4lastName && signedUpUsers[user].si5Code==si10Obj.si5Code && signedUpUsers[user].si6MobNo==si10Obj.si6MobNo && signedUpUsers[user].si7EmailID==si10Obj.si7EmailID){
        return true;            
      }
    }
    return false;
  }  

