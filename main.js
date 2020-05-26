var currPass = "";

var app = document.getElementById('app');
app.addEventListener('mousedown', appMouseHandle);
var email = document.getElementById('email');
email.addEventListener('keydown', emailHandle);
var password = document.getElementById('password');
password.addEventListener('keydown', passwordHandle);
var email2 = document.getElementById('email2');
email2.addEventListener('keydown', emailHandle);
var password2 = document.getElementById('password2');
password2.addEventListener('keydown', passwordHandle);
var confirmPassword = document.getElementById('confirmPassword');
confirmPassword.addEventListener('keydown', doublepasswordHandle);

document.addEventListener('DOMContentLoaded', function(){ 
    var movingBox = document.getElementById("movingBox");
    var newline = "\r\n";
    movingBox.childNodes[1].childNodes[1].textContent = "Hello There";
    movingBox.childNodes[1].childNodes[5].textContent = "Don't have an account?" + newline + "Sign up with us today!";
}, false);

function moveBoxLeft() {
    var movingBox = document.getElementById("movingBox");
    movingBox.classList.remove('animateRight');
    movingBox.classList.add('animateLeft');
    //replace the box text contents
    var newline = "\r\n";
    movingBox.childNodes[1].childNodes[1].textContent = "Lets get you started";
    movingBox.childNodes[1].childNodes[5].textContent = "Be part of our awesome" + newline + "team and have fun with us";
    //animate the box text content
    // var boxText = document.getElementById("movingBoxText");
    // boxText.classList.add('animateTextLeft');
}

function moveBoxRight() {
    var movingBox = document.getElementById("movingBox");
    movingBox.classList.remove('animateLeft');
    movingBox.classList.add('animateRight');
    //replace the box text contents
    var newline = "\r\n";
    movingBox.childNodes[1].childNodes[1].textContent = "Hello There";
    movingBox.childNodes[1].childNodes[5].textContent = "Don't have an account?" + newline + "Sign up with us today!";
}

function emailHandle(event) {
    var warning = document.getElementById("warningMsg");
    warning.style.display = "none";
    //press enter (keycode 13)
    if(event.keyCode == 13) {
        var textInput = this.value;
        var index = textInput.search('@');
        if(index < 0) {
            warning.style.display = "inline";
            warning.childNodes[2].textContent = "Please include an '@' in the email address. " + textInput + " is missing an '@'.";
            var inputBox = this.getBoundingClientRect();
            warning.style.top = (inputBox.top+50)+'px';
            warning.style.left = (inputBox.left-100)+'px';
        }
    }
}

function passwordHandle(event) {
    var warning = document.getElementById("warningMsg");
    warning.style.display = "none";
    currPass = password2.value + event.key;
    //press enter (keycode 13)
    if(event.keyCode == 13) {
        var textInput = this.value;
        var num = textInput.length;
        if(num < 6) {
            warning.style.display = "inline";
            warning.childNodes[2].textContent = "Please lengthen this text to 6 characters or more (you are currently using " + num + " characters).";
            var inputBox = this.getBoundingClientRect();
            warning.style.top = (inputBox.top+50)+'px';
            warning.style.left = (inputBox.left-100)+'px';
        }
    }
}

function doublepasswordHandle(event) {
    var warning = document.getElementById("warningMsg");
    warning.style.display = "none";
    var test = password.value;
    //press enter (keycode 13)
    if(event.keyCode == 13) {
        var pass = currPass;
        if(pass !== this.value) {
            warning.style.display = "inline";
            warning.childNodes[2].textContent = "password does not match";
            var inputBox = this.getBoundingClientRect();
            warning.style.top = (inputBox.top+50)+'px';
            warning.style.left = (inputBox.left-100)+'px';
        }
    }
}

function appMouseHandle(event) {
    //hide any warning msg
    var warning = document.getElementById("warningMsg");
    warning.style.display = "none";
}