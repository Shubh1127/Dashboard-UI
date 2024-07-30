const sideMenu=document.querySelector("aside");
const menuBtn=document.querySelector("#menu-btn");
const closebtn=document.querySelector("#close-btn");





menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block';
})



    const lightButton = document.querySelector(".light");
    const darkButton = document.querySelector(".dark");

    darkButton.addEventListener("click", () => {
      console.log("Dark button clicked");

      document.body.classList.add("dark-theme");
    });

    lightButton.addEventListener("click", () => {
      console.log("Light button clicked");
      document.body.classList.remove("dark-theme");
    });
