// ======================================
// LOGIN
// ======================================

const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("login-page");
const app = document.getElementById("app");
const loginToggle = document.getElementById("loginToggle");

const signupToggle = document.getElementById("signupToggle");

const nameField = document.getElementById("nameField");

const submitBtn = document.getElementById("submitBtn");

const forgotPassword = document.getElementById("forgotPassword");

const welcomeHeading = document.getElementById("welcomeHeading");

const joinNow = document.getElementById("joinNow");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    loginPage.classList.add("hidden");

    app.classList.remove("hidden");

});



// ======================================
// PASSWORD TOGGLE
// ======================================

const passwordInput = document.querySelector(".password-box input");

const passwordIcon = document.querySelector(".password-box span");

passwordIcon.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        passwordIcon.textContent = "visibility_off";

    }

    else {

        passwordInput.type = "password";

        passwordIcon.textContent = "visibility";

    }

});



// ======================================
// PAGE SWITCHING
// ======================================

const navLinks = document.querySelectorAll(".nav-link");

const pages = document.querySelectorAll(".page-section");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const page = this.dataset.page;

        pages.forEach(section => {

            section.classList.remove("active");

        });

        document
            .getElementById(page)
            .classList.add("active");

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});



// ======================================
// SEARCH
// ======================================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        const text = card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});



// ======================================
// SAVE BUTTON
// ======================================

const saveButtons = document.querySelectorAll(".overlay button");

saveButtons.forEach(button=>{

    button.addEventListener("click",function(e){

        e.stopPropagation();

        if(this.innerText=="Save"){

            this.innerText="Saved";

            this.style.background="green";

        }

        else{

            this.innerText="Save";

            this.style.background="#e60023";

        }

    });

});



// ======================================
// IMAGE CLICK
// ======================================

const images = document.querySelectorAll(".card img");

images.forEach(image=>{

    image.addEventListener("click",()=>{

        image.style.transform="scale(1.1)";

        setTimeout(()=>{

            image.style.transform="scale(1)";

        },250);

    });

});



// ======================================
// BOARD HOVER
// ======================================

const boards = document.querySelectorAll(".board");

boards.forEach(board=>{

    board.addEventListener("mouseenter",()=>{

        board.style.transform="translateY(-10px)";

    });

    board.addEventListener("mouseleave",()=>{

        board.style.transform="translateY(0)";

    });

});



// ======================================
// CREATE BOARD
// ======================================

const createBoardBtn = document.querySelector(".create-board button");

createBoardBtn.addEventListener("click",()=>{

    const boardName = prompt("Enter Board Name");

    if(boardName===null || boardName===""){

        return;

    }

    const boardsContainer = document.querySelector(".boards");

    const board = document.createElement("div");

    board.className="board";

    board.innerHTML=`

        <img src="https://picsum.photos/400?random=${Math.floor(Math.random()*1000)}">

        <h3>${boardName}</h3>

        <p>0 Pins</p>

    `;

    boardsContainer.appendChild(board);

});



// ======================================
// PROFILE BUTTONS
// ======================================

const shareBtn=document.querySelector(".share");

const editBtn=document.querySelector(".edit");

shareBtn.addEventListener("click",()=>{

    alert("Share feature coming soon.");

});

editBtn.addEventListener("click",()=>{

    alert("Edit Profile feature coming soon.");

});



// ======================================
// SIDEBAR TOOLTIPS
// ======================================

const tooltips=document.querySelectorAll(".tooltip");

tooltips.forEach(tip=>{

    tip.style.transition=".3s";

});



// ======================================
// PAGE LOAD
// ======================================

window.onload=()=>{

    app.classList.add("hidden");

};

// ======================================
// PROFILE CLICK -> MY BOARDS
// ======================================

const profileBtn = document.getElementById("profileBtn");

profileBtn.addEventListener("click", () => {

    pages.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById("boards").classList.add("active");

    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    document
        .querySelector('.nav-link[data-page="boards"]')
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================
// LOGIN MODE
// ==========================

loginToggle.addEventListener("click", () => {

    loginToggle.classList.add("active");

    signupToggle.classList.remove("active");

    nameField.classList.add("hidden");

    forgotPassword.classList.remove("hidden-element");

    submitBtn.innerText = "Log In";

    welcomeHeading.innerText = "Welcome to Pinterest";

});



// ==========================
// SIGN UP MODE
// ==========================

signupToggle.addEventListener("click", () => {

    signupToggle.classList.add("active");

    loginToggle.classList.remove("active");

    nameField.classList.remove("hidden");

  forgotPassword.classList.add("hidden-element");

    submitBtn.innerText = "Sign Up";

    welcomeHeading.innerText = "Create your account";

});



// ==========================
// JOIN FOR FREE
// ==========================

joinNow.addEventListener("click", (e) => {

    e.preventDefault();

    signupToggle.click();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});