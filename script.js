let name = document.getElementById("name");   
let email = document.getElementById("email");
let comment = document.getElementById("comment");
let msg ="";
let validInputs =false;
let validEmail=false

let inputs = Array.from(document.querySelectorAll('.form-control'))

/**** navbar ******/
window.onscroll=function(){
    var scroll = $(window).scrollTop();
    if(scroll < 200){
        document.querySelector('.fixed-top').classList.replace('bg-light','bg-transparent');
        document.querySelector('.fixed-top').classList.replace('navbar-light','navbar-dark');
    } else{
        document.querySelector('.fixed-top').classList.replace('bg-transparent','bg-light');
        document.querySelector('.fixed-top').classList.replace('navbar-dark','navbar-light');
    }
};
/************* Submit button **********/ 
document.getElementById("btn-submit")
       .addEventListener("click", function(e) {


        /*** Check empty inputs ***/
    if(name.value === ""){
        msg=msg+'Name \n';
        name.style.setProperty('border','1px solid red');
    }else {
        name.style.removeProperty('border');
    }

    if(email.value === ""){
        msg=msg+'Email \n';
        email.style.setProperty('border','1px solid red');
    }else {
        email.style.removeProperty('border');
    }

    if(comment.value === ""){
        msg=msg+'Comments ';
        comment.style.setProperty('border','1px solid red');
    }else {
        comment.style.removeProperty('border');
    }

    if(inputs.filter(el=>el.value).length!==inputs.length){
        alert('empty input(s): '+msg);
        msg=""
    }else{
        validInputs=true
    }

         /*** Check valid email ***/

    if((email.value.indexOf('@')===-1) && (email.value !=="")){
        alert('non valid email adress');
        email.style.setProperty('border','1px solid red');
    }else if(email.value !==""){
        email.style.removeProperty('border');
        validEmail=true
    }

    /**final check **/
    if(validInputs && validEmail){
        alert('Merci');
        document.querySelector('#contact-form').reset()
    }

});        