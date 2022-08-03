'use strict'

const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnCloseModal=document.querySelector(".close-modal");
const btnsshowModal=document.querySelectorAll(".show-modal");

for(let i=0;i<btnsshowModal.length;i++){
    btnsshowModal[i].addEventListener("click", function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

// close modal feature
const closeModel=function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

// Esc event 
document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
     if(!modal.classList.contains("hidden")){
        //  close model only,if it is visible
        closeModel();
     }
  }
});