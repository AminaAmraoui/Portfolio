let name = document.getElementById("name");   
let email = document.getElementById("email");
let comment = document.getElementById("comment");
let validInputs =false;
let validEmail=false

let inputs = Array.from(document.querySelectorAll('.form-control'))

/****************************** navbar ***********************************/
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
/************************ Submit button ***********************************/ 
document.getElementById("btn-submit")
       .addEventListener("click", function(e) {

        /* initialize variables*/ 
        validInputs=false;
        validEmail=false;
        name = document.getElementById("name");   
        email = document.getElementById("email");
        comment = document.getElementById("comment");
        document.querySelector('#Check-Modal .modal-body').innerHTML=""

        /*** Check empty inputs ***/
    if(name.value === ""){
        name.style.setProperty('border','1px solid red');
    }else {
        name.style.removeProperty('border');
    }

    if(email.value === ""){
        email.style.setProperty('border','1px solid red');
    }else {
        email.style.removeProperty('border');
    }

    if(comment.value === ""){
        comment.style.setProperty('border','1px solid red');
    }else {
        comment.style.removeProperty('border');
    }

    if(inputs.filter(el=>el.value).length!==inputs.length){
        document.querySelector('#btn-submit').setAttribute('data-toggle','modal');
        document.querySelector('#btn-submit').setAttribute('data-target','#Check-Modal');
        document.querySelector('#Check-Modal .modal-body').innerHTML+='<p>Please check missing inputs</p>'
    }else{
        validInputs=true;
    }

         /*** Check valid email ***/

    if((email.value.indexOf('@')===-1) && (email.value !=="")){
        document.querySelector('#btn-submit').setAttribute('data-toggle','modal');
        document.querySelector('#btn-submit').setAttribute('data-target','#Check-Modal');
        document.querySelector('#Check-Modal .modal-body').innerHTML+='<p>Invalid email adress</p>'
    }else if((email.value !=="")&& (email.value.indexOf('@')!==-1)){
        email.style.removeProperty('border');
        validEmail=true;
    }

    /**final check **/
    if(validInputs && validEmail){
        document.querySelector('#btn-submit').setAttribute('data-toggle','modal');
        document.querySelector('#btn-submit').setAttribute('data-target','#Succes-Modal');
        document.querySelector('#contact-form').reset();
    }

});  
/******************** FontAwesome Email icon animation ****************/      
document.querySelector('.fa-envelope')
       .addEventListener("mouseover", function(e) {
        document.querySelector('.fa-envelope').classList.add('fa-spin');
});
document.querySelector('.fa-envelope')
       .addEventListener("mouseout", function(e) {
        document.querySelector('.fa-envelope').classList.remove('fa-spin');
});