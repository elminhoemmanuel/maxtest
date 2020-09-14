// selectors
const inputText = document.querySelector("#email");
const pwordText = document.querySelector("#password");
const loginBtn = document.querySelector(".login-btn");
const pwordHelp = document.querySelector("#pwordHelp");

//listeners

//functions
function validateFormItems()
{
const passwordFormat =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailFormat)&&pwordText.value.match(passwordFormat))
{
loginBtn.classList.remove("disabled");
return true;
}
else
{
loginBtn.classList.add("disabled");
return false;
}
}

function showPwordWarning() {
    pwordHelp.style.display="block";
}
function hidePwordWarning() {
    pwordHelp.style.display="none";
}


// jquery code to use validator plugin
$(document).ready(function(){
    $("#login-form").validate();
})

