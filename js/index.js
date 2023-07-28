const inputEmail = document.getElementById("email") ;

const inputPassword = document.getElementById("password");

const loginBtn = document.getElementById("join-btn");

loginBtn.addEventListener("click" ,function(){

    if (inputEmail.value === "ahmed@gmail.com" && inputPassword.value === "123456" ) {
        alert ("welcome back ahmed")
    } else {
        alert("please fill all the fields")
    }
} )