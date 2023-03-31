let adminName=JSON.parse(localStorage.getItem("adName"));

// console.log(adminName[0]);
let h3=document.getElementById("naam");
h3.innerText=`${adminName[0]}`;

function logout(){
    alert("Do you really want to logout?");
    window.location.href="login_admin.html";
}

let keyName=JSON.parse(localStorage.getItem("product")) || [];
function sofas(){
    keyName=[];
    keyName.push("Sofas");
    localStorage.setItem("product",JSON.stringify(keyName));
    console.log("ok");
}

function living(){
    keyName=[];
    keyName.push("Living");
    localStorage.setItem("product",JSON.stringify(keyName));
}

function bedroom(){
    keyName=[];
    keyName.push("Bedroom");
    localStorage.setItem("product",JSON.stringify(keyName));
}

function dining(){
    keyName=[];
    keyName.push("Dining");
    localStorage.setItem("product",JSON.stringify(keyName));
}

function storage(){
    keyName=[];
    keyName.push("Storage");
    localStorage.setItem("product",JSON.stringify(keyName));
}

function study(){
    keyName=[];
    keyName.push("Study");
    localStorage.setItem("product",JSON.stringify(keyName));
}

function lighting(){
    keyName=[];
    keyName.push("Lighting");
    localStorage.setItem("product",JSON.stringify(keyName));
}

function users(){
    keyName=[];
    keyName.push("users");
    localStorage.setItem("product",JSON.stringify(keyName));
}

function orders(){
    keyName=[];
    keyName.push("orders");
    localStorage.setItem("product",JSON.stringify(keyName)); 
}

let h1=document.getElementById("title");
h1.innerText=`${keyName[0]} Data`;