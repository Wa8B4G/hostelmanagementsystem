// this is my booking declaration 
const booking = document.querySelector("#booknow");
const booknow = document.querySelector(".mybook");
const bktimes = document.querySelector(".bktimes");

// this is my usernavigation declaration

const Nbtn = document.querySelector(".horiz-btn");
const cbtn = document.querySelector("#cbtn");
const userNav = document.querySelector("#user-nav");

// this is user dashboard javascript styling
const btn_active = document.querySelector(".btn-active");
const btn_active_1 = document.querySelector(".btn-active-1");
const home_active= document.querySelector(".home_active");
const home_active_1= document.querySelector(".home_active-1");
const side_navigation = document.querySelector(".side_navigation ");



// this is my booking javascript styling
const bookingNow = function () {
    booking.style.display = "block";
}

booknow.addEventListener("click", bookingNow);

bktimes.addEventListener("click", function () {
    booking.style.display = "none";
})



// this is my user navigation styling

console.log(Nbtn);

 const myNbtn = function(){
   
    Nbtn.style.display = "none";
cbtn.style.display = "block";
userNav.style.marginLeft = "0";
side_navigation.style.marginLeft = "0";
userNav.style.opacity = "8";

}
Nbtn.addEventListener("click", myNbtn);
// this is cbtn javascript function
const myCbtn = function(){
    
    Nbtn.style.display = "block";
cbtn.style.display = "none";
userNav.style.marginLeft = "-100px";
side_navigation.style.marginLeft = "-100px";
userNav.style.opacity = "0";

}

cbtn.addEventListener("click", myCbtn);


// this is my dashboard javascript designed 
btn_active.addEventListener("click", homeDash)

function homeDash() {
    home_active_1.style.display = "none";
    home_active.style.display = "block";
    }

    btn_active_1.addEventListener("click", function(){
     
        home_active.style.display = "none";
        home_active_1.style.display = "block";
      
    });

