const booking = document.querySelector("#booknow");
const booknow = document.querySelector(".mybook");
const bktimes = document.querySelector(".bktimes");

const bookingNow = function () {
    booking.style.display = "block";
}

booknow.addEventListener("click", bookingNow);

bktimes.addEventListener("click", function () {
    booking.style.display = "none";
})


