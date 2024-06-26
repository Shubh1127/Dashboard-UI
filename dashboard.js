const sideMenu=document.querySelector("aside");
const menuBtn=document.querySelector("#menu-btn");
const closebtn=document.querySelector("#close-btn");

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block';
})

closebtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
})