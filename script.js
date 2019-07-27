let name = document.getElementById("name");   
let email = document.getElementById("email");
let comment = document.getElementById("comment");
let msg =""

let inputs = Array.from(document.querySelectorAll('.form-control'))

/**** navbar ******/
window.onscroll=function(){
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll < 300){
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
        msg=msg+'Name \n'
    }
    if(email.value === ""){
        msg=msg+'Email \n'
    }
    if(comment.value === ""){
        msg=msg+'Comments '
    }

    if(inputs.filter(el=>el.value).length!==inputs.length){
        alert('empty input(s): '+msg)
    }

         /*** Check valid email ***/

    if((email.value.indexOf('@')===-1) && (email.value !=="")){
        alert('non valid email adress')
    }

});        