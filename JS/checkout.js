function continueToShipping(e) {
  let mobile = document.getElementById("mobile")
  let address = document.getElementById("address")
  let city = document.getElementById("city")
  let name = document.getElementById("width50")
  let pin= document.getElementById("width25");


  let alert = document.getElementById("alert")
  let alert1 = document.getElementById("alert1")
  let alert2 = document.getElementById("alert2")
  let alert3 = document.getElementById("alert3")

  console.log(mobile.value.length)
  console.log(name.value.length)
  if (name.value.length === 0) {
      name.style.border = "1px solid red"

      alert1.innerHTML = "Enter Name"

  } else if (address.value.length === 0) {
      address.style.border = "1px solid red"

      alert2.innerHTML = "Enter Address"

  } else if (city.value.length === 0) {
      address.style.border = "1px solid red"

      alert3.innerHTML = "Enter City"
  } else if (mobile.value.length === 0) {

      mobile.style.border = "1px solid red"

      alert.innerHTML = "Enter Mobile Number"


  } else if (pin.value.length === 0) {

pin.style.border = "1px solid red"

alert.innerHTML = "Enter Pincode "




} 
  else {
      e.preventDefault();

      let myForm = document.getElementById("myForm")
      let name = document.getElementById("width50")
      let address = document.getElementById("address")
      let mobile = document.getElementById("mobile")
      let city = document.getElementById("city")

      let Name = name.value
      let Address = address.value
      let Mobile = mobile.value
      let City = city.value

      // console.log(name.value)

      if (localStorage.getItem("data") === null) {
          localStorage.setItem("data", JSON.stringify([]))
         
      }


      let datas = {
          Name,
          Address,
          Mobile,
          City,
      };


      let arr = JSON.parse(localStorage.getItem("data"))
          // console.log(arr)


      arr.push(datas)

      localStorage.setItem("data", JSON.stringify(arr))


      console.log("data:", Name, Address, Mobile)
      window.location.href = "shipping.html"
     
  }


}
