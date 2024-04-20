const register = document.querySelector(".register")
const times = document.querySelector(".times");
const times1 = document.querySelector(".times1");
const mybtn = document.querySelector(".mybtn");
const mybtn1 = document.querySelector(".mybtn1");



function Register() {
    register.style.display = "none";
}
times.addEventListener("click", Register);

function Register1() {
    register.style.display = "none";
}
times1.addEventListener("click", Register1);

const Mybtn = function () {
    register.style.display = "block";
}
mybtn.addEventListener("click", Mybtn);

const Mybtn1 = function () {
    register.style.display = "block";
}

mybtn1.addEventListener("click", Mybtn1);

// this is my booking styling

// this is my form authentication
const userName = document.querySelector(".userName");
const userPass = document.querySelector(".userPass");
const userSign = document.querySelector(".userSign");

const userAuthentication = function(e){
    e.preventDefault();
    let userNameAuth = userName.value;
    let userPassAuth = userPass.value;

    if (!userNameAuth == "" && !userPassAuth == "") {
        console.log(userNameAuth);
        console.log(userPassAuth);
    }
    else{
        console.log("please provide a username and password");
    }
}

userSign.addEventListener("submit", userAuthentication);





