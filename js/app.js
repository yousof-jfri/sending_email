//variables

//send btn
const btn = document.querySelector("#sendBtn");
//email content
const email = document.querySelector("#email"),
    aboutTxt = document.querySelector("#subject"),
    txt = document.querySelector("#message"),
    resetBtn = document.querySelector("#resetBtn"),
    form = document.querySelector("#email-form");


//event Listeners
eventListener();

function eventListener() {
    //disable the btn
    document.addEventListener('DOMContentLoaded', stopBtn)

    //check the inputs
    email.addEventListener("blur", checkFields);
    txt.addEventListener("blur", checkFields);
    aboutTxt.addEventListener("blur", checkFields);

    //reset
    resetBtn.addEventListener("click", resetAll)

    //submit send btn
    btn.addEventListener("click", spinner)

}


//functions

//send btn is not active
function stopBtn() {
    btn.disabled = true;
}
//spinner
function spinner(e) {
    e.preventDefault();
    const spin = document.querySelector("#spinner");
    const mSent = document.createElement("img");
    mSent.src = "img/mail.gif"
    spin.style.display = "block";

    setTimeout(function () {
        spin.style.display = "none";
        mSent.style.display = "block";
        document.querySelector("#loaders").appendChild(mSent);
        setTimeout(function () {
            mSent.style.display = "none";
            resetAll();
            alert("email sent successfully")
        },5000)
    },3000 )
}
//check the all fields
function checkFields() {
    checkLength(this);

    if (this.type === "email"){
        checkEmail(this);
    }

    let error = document.querySelectorAll(".error");
    if (email.value !== "" && aboutTxt.value !== "" && txt.value !== ""){
        if (error.length === 0){
            btn.disabled = false;
            console.log(error)
        }
    }

}
//check email

function checkEmail(field) {
    const emailText = field.value;
    if(emailText.includes('@')){
        field.classList.remove('error')
        field.style.borderBottomColor = "green";
    } else {
        field.classList.add('error')
        field.style.borderBottomColor = "red";
    }
}

//check le
function checkLength(input) {
    if (input.value.length > 0){
        input.style.borderBottomColor = "green";
        input.classList.remove("error");
    }else {
        input.style.borderBottomColor = "red";
        input.classList.add("error");
    }
}

//reset all
function resetAll() {
    form.reset();
}


