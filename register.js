
var currentUser;
var userArray = [{username: "p",
    password: "p",
    fullName: "Admin",
    email: "p@p.p",
    highestScore: 0}];
localStorage.setItem("p",userArray);
var fullNameError = false;
var userNameError = false;
var passwordError = false;
var emailError = false;




$(function(){
   // changeDisplay("welcome")
   //  document.getElementById("welcome").style.display = "block";
   //  document.getElementById("login").style.display = "none";
   //  document.getElementById("register").style.display = "none";
   //  document.getElementById("mainContent").style.display = "none";
    $("#uname").focusout(function () {
        check_username();
    });  
    $("#password").focusout(function () {
        check_password();
    });
    $("#fullName").focusout(function () {
        check_fullName();
    });
    $("#email").focusout(function () {
        check_email();
    });
});




function check_username(){
    var form = document.getElementById("registerForm");
    for (var index = 0; index < userArray.length; index++) {
        var user = userArray[index];
        let test = form.elements[0].value;
        let test1 = $("uname".valueOf());
        let userTest = user.username;
        if(user.username.localeCompare(test) ==0 ){
            $("#unameError").html("that username is already exist ! ");
            $("#unameError").show();
            userNameError = true;
        }else{
            userNameError = false;
        }
    }
    if(!userNameError){
        $("#unameError").hide();
    }
}

function check_password(){
    var passwordLength = $("#password").val().length;
    if(!$("#password").val().match(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/)) {
        if (passwordLength < 6) {
            $("#passwordError").html("At least 6 characters !!! ");
            $("#passwordError").show();
            passwordError = true;
        } else {
            $("#passwordError").html("Password should contains both letters and numbers");
            $("#passwordError").show();
            passwordError = true;
        }
    }else {
        $("#passwordError").hide();
        passwordError = false;
    }
}


function check_fullName(){
    if(!$("#fullName").val().match(/^[a-zA-Z]/)){
        $("#fullNameError").html("full name must contains letters !");
        $("#fullNameError").show();
        fullNameError = true;
    }else{
        $("#fullNameError").hide();
        fullNameError = false;
    }
}


function check_email(){

    if(!$("#email").val().match(/^[a-z0-9A-Z]+@[a-z0-9A-Z]+.[a-zA-Z]/)){
        $("#emailError").html("not legal email !");
        $("#emailError").show();
        emailError = true;
    }else{
        $("#emailError").hide();
        emailError = false;
    }

}


function saveDetails() {

    check_username();
    check_fullName();
    check_password();
    check_email();
    var form = document.getElementById("registerForm");
    if ( !userNameError && !passwordError && !fullNameError && !emailError){
        var userName = form.elements[0].value;
        var pass = form.elements[1].value;
        var fullName = form.elements[2].value;
        var email = form.elements[3].value;
        var score = 0;
        //arrDetails = {username,fullName,pass,email};
        localStorage.setItem(userName,[userName, pass, fullName, email, score]);
        changeDisplay(document.getElementById("settingPage"),document.getElementById("welcome"));
        document.getElementById("currentUser").innerHTML = "Hello, " + userName;
        //document.getElementById("register").style.display="none";
        document.getElementById("registerForm").reset();
        document.getElementById("navbar").style.display="inline"
    }
   // document.getElementById('register').style.display='none'
}

function checkLoginDetails() {
    var emptyPassLogin = false;
    var loginForm = document.getElementById("loginForm");
    var uname = loginForm.elements[0].value;
    var pass = loginForm.elements[1].value;

    $("#passLogin").focusout(function () {
        check_password_login();
    });
    if( pass.length < 1 ){
        check_password_login();
    }

    var details=localStorage.getItem(uname);
    if (details != null){
        if( details[1].localeCompare(pass)  && !emptyPassLogin){
            document.getElementById("currentUser").innerHTML = "Hello, " + uname;
            changeDisplay(document.getElementById("settingPage"),document.getElementById("welcome"));
            document.getElementById("loginForm").reset();
            document.getElementById("registerForm").reset();
            document.getElementById("navbar").style.display="inline"
        }else{
            window.alert("Wrong username or password! ");
        }
    }else{
    window.alert("Wrong username or password! ");


    }

}

$("#loginForm").submit(function() {

    window.alert("login good")
    checkLoginDetails()
});


function changeDisplay(inDiv) {
    var allDivs = document.getElementsByClassName("allDivs");
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.display="none";
    }

    //outDiv.style.display = "none";
    inDiv.style.display = "block";
    // document.getElementById(outDiv).style.display = "none";
    // document.getElementById(inDiv).style.display = "true";
}


function changeDisplayToLoginOrRegister(inDiv) {
    inDiv.style.display = "block";
}

function cancelbtn(divElement) {
    divElement.style.display = "none";
    $('#aboutModal').css("display", "none");
}


function check_password_login() {
    if(pass.length < 1){
        $("#passLoginError").html("password section is empty !");
        $("#passLoginError").show();
        emptyPassLogin = true;
    }
}

function logOut() {
    firstTime=true;
    clearInterval(cherryInterval);
    window.clearInterval(interval);
    window.clearInterval(intervalMon);
    window.clearInterval(healthInterval);
    window.clearInterval(intervalSound);
    window.clearInterval(rottenInterval);
    window.clearInterval(currentTimeLeft);
    changeDisplay(document.getElementById("welcome"));
    document.getElementById("navbar").style.display="none";

}