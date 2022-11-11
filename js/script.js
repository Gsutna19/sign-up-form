// document.getElementById("red").classList.add("purple");

const phone = document.getElementById("number");
function validatePhone() {

    let reg = /(\d{3}\-\d{3}\-\d{4})/;
    
    if(reg.test(phone.value)) {
        phone.classList.remove("red");
        phone.classList.remove("gray");
        phone.classList.add("green");
    } else if (phone.value == "") {
        phone.classList.remove("green");
        phone.classList.remove("red");
        phone.classList.add("gray");
        console.log("gray");
    } else {
        phone.classList.remove("green");
        phone.classList.remove("gray");
        phone.classList.add("red");
    }
}

let password = document.getElementById("userPswrd");

let length = document.getElementById("length");
let caps = document.getElementById("caps");
let lower = document.getElementById("lower");
let nums = document.getElementById("nums");
let special = document.getElementById("special");
let safe = document.getElementById("safe");

function validatePassword() {

    let fullReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    let lenReg = /^.{8,}$/;
    let upReg = /(?=.*?[A-Z])/;
    let lwReg = /(?=.*?[a-z])/;
    let nReg = /(?=.*?[0-9])/;
    let spReg = /(?=.*?[#?!@$ %^&*-])/;
    console.log(spReg.test(password.value));

    if (!lenReg.test(password.value)) {
        length.classList.remove("check");
    }
    if (!upReg.test(password.value)) {
        caps.classList.remove("check");
    }
    if (!lwReg.test(password.value)) {
        lower.classList.remove("check");
    }
    if (!nReg.test(password.value)) {
        nums.classList.remove("check");
    }
    if (!spReg.test(password.value)) {
        special.classList.remove("check");
    }
    if (!fullReg.test(password.value)) {
        safe.classList.remove("check");
    }

    if (lenReg.test(password.value)) {
        length.classList.add("check");
    }
    if (upReg.test(password.value)) {
        caps.classList.add("check");
    }
    if (lwReg.test(password.value)) {
        lower.classList.add("check");
    }
    if (nReg.test(password.value)) {
        nums.classList.add("check");
    }
    if (spReg.test(password.value)) {
        special.classList.add("check");
    }
    if (fullReg.test(password.value)) {
        safe.classList.add("check");
    }

}

let confirmPassword = document.getElementById("confirm");
let noMatch = document.getElementById("errorMsg");

function matchPassword() {

    console.log(noMatch);

    if (confirmPassword.value !== password.value) {
        noMatch.classList.add("error");
    }
    if (confirmPassword.value === password.value) {
        noMatch.classList.remove("error");
        console.log("remove");
    }
}


phone.addEventListener("focusout", validatePhone);
password.addEventListener("keyup", validatePassword);
confirmPassword.addEventListener("focusout", matchPassword);