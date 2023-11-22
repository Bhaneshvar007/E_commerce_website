let loginPage = document.querySelector(".loginPage");
let loginBtn = document.querySelector("#login-btn");
let NavLoginBtn = document.querySelector("#NavLoginBtn");

NavLoginBtn.addEventListener("click", () => {
    loginPage.style.display = "flex";

    let text = document.querySelector("#Text");
    let pass = document.querySelector("#password");

    loginBtn.addEventListener("click", () => {
        if ((text.value == "") || (pass.value == "")) {
            alert("Please Enter Name & Password")
        }

        else {
            alert("Your are logged in")
            loginPage.style.display = "none";
        }
    })
})

let SubmitBtn = document.querySelector("#SubmitBtn")
let Name = document.querySelector("#name")
let password = document.querySelector("#pass")

SubmitBtn.addEventListener("click", () => {
    if ((Name.value == "") || (password.value == "")) {
        alert("Please Enter Your Name & Password")
    }

    else {
        alert(Name.value + " Thank you for connecting")
    }
})

let homeEl = document.getElementById("home")
let clothEl = document.getElementById("cloth")
let blogEl = document.getElementById("blog")
let reviewEl = document.getElementById("review")
let contectEl = document.getElementById("contect");

// nav bar hide / none

let MenuIcon = document.querySelector("#icon");
let CrossIcon = document.querySelector("#croseIcon");
let textarea = document.querySelector(".text-area");

MenuIcon.addEventListener("click", () => {
    MenuIcon.style.display = "none";
    CrossIcon.style.display = "block";
    textarea.style.display = "flex";

    CrossIcon.addEventListener("click", () => {
        MenuIcon.style.display = "block";
        CrossIcon.style.display = "none";
        textarea.style.display = "none";
    })
})