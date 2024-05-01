const btns = document.querySelectorAll(".btn")
const loginBtn = document.querySelectorAll(".loginBtn")
const signupBtn = document.querySelectorAll(".signupBtn")
const signupSection = document.getElementById("sign-up")
const loginSection = document.getElementById("login")
const btnLog = document.getElementById("btnLOG")
const btnSign = document.getElementById("btnSIGN")
const loginChange = document.querySelector(".ingia")
const registerChange = document.querySelector(".register")

const hamburger = document.querySelector(".hamburger")
const navItems = document.querySelector(".nav-items")
const close = document.querySelector(".close")

const displayS = () => {
    loginSection.style.display = "none";
    signupSection.style.display = "flex";
}
const displayL = () => {
    loginSection.style.display = "flex";
    signupSection.style.display = "none";
}
const showUp = () =>{
    navItems.classList.toggle("clicked")
}
hamburger.addEventListener("click", showUp)
close.addEventListener("click", showUp)

loginBtn.forEach(btnL => {
    btnL.addEventListener("click", function(){
        btnLog.classList.add("activated")
        btnSign.classList.remove("activated")
        displayL()
    })
})
signupBtn.forEach(btnS => {
    btnS.addEventListener("click", function(){
        btnLog.classList.remove("activated")
        btnSign.classList.add("activated")
        displayS()
    })
})

registerChange.addEventListener("click", function(){
    setTimeout(function(){
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }, 2000)
})
loginChange.addEventListener("click", function(){
    setTimeout(function(){
        document.getElementById("email2").value = "";
        document.getElementById("password2").value = "";
    }, 2000)
})