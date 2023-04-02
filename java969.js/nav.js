// let endpoint=JSON.parse(localStorage.getItem("endpoint")) || [];
let sofass=document.getElementById("sofa")

sofass.addEventListener("click",(e)=>{
   e.preventDefault()
        endpoint=[];
        endpoint.push("Sofas");
        localStorage.setItem("endpoint",JSON.stringify(endpoint));
    
    


})
let liv=document.getElementById("live")

liv.addEventListener("click",(e)=>{
   e.preventDefault()
        endpoint=[];
        endpoint.push("Living");
        localStorage.setItem("endpoint",JSON.stringify(endpoint));
    
    


})

let beds=document.getElementById("bed")

beds.addEventListener("click",(e)=>{
   e.preventDefault()
        endpoint=[];
        endpoint.push("Bedroom");
        localStorage.setItem("endpoint",JSON.stringify(endpoint));
    
    


})

let dine=document.getElementById("Din")

dine.addEventListener("click",(e)=>{
   e.preventDefault()
        endpoint=[];
        endpoint.push("Dining");
        localStorage.setItem("endpoint",JSON.stringify(endpoint));
    
    


})
let stor=document.getElementById("sto")

stor.addEventListener("click",(e)=>{
   e.preventDefault()
        endpoint=[];
        endpoint.push("Storage");
        localStorage.setItem("endpoint",JSON.stringify(endpoint));
    
    


})


let stud=document.getElementById("std")

stud.addEventListener("click",(e)=>{
   e.preventDefault()
        endpoint=[];
        endpoint.push("Study");
        localStorage.setItem("endpoint",JSON.stringify(endpoint));
    
    


})



let lig=document.getElementById("ld")

lig.addEventListener("click",(e)=>{
   e.preventDefault()
        endpoint=[];
        endpoint.push("Lighting");
        localStorage.setItem("endpoint",JSON.stringify(endpoint));
    
    


})