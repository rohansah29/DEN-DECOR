let regi = document.querySelector("form");
regi.addEventListener("submit", (e) => {
  e.preventDefault()

  const obj = {
    firstname: firstName.value,
    lastname: lastName.value,
    email: email.value,
    password: password.value,
    mobile: mobile.value,

  };
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    password.value == "" ||
    mobile.value == ""
  ) {
    alert("Please fill out all required fields ");
  } else {
    fetch("https://den-decor.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj)
    })

      .then((res) => {
        return res.json()
      })

      .then((data) => {
        console.log(data)
        alert("Congratulations! Your Account Created Sucessfully! Now SignIn for Explore.")
        window.location.href = "login.html"

      })
      .catch((err) => {
        console.log(err)
      })
  }
});
console.log("hi")
var si2title = document.getElementById('si2title');
var firstName = document.getElementById('si3firstName');
var lastName = document.getElementById('si4lastName')
var si5Code = document.getElementById('si5Code')
var mobile = document.getElementById('si6MobNo')
var email = document.getElementById('si7EmailID')
var password = document.getElementById('si8Pass')





