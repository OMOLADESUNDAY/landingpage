var iconbar=document.getElementById('icon-bar');
var btn_toggler=document.getElementById("btn-toggler");
var menu=document.getElementById("menu");
function change(){
    if (menu.classList.contains("hide")) {
        menu.classList.remove('hide')
        menu.classList.add('show');
        iconbar.classList.add("fa-window-close")
        iconbar.classList.add("fas")
        iconbar.classList.remove("fa-bars")
        iconbar.classList.remove("fas")
    
    }
    else{   
        menu.classList.remove('show');
        menu.classList.add('hide');
        iconbar.classList.add('fa')
        iconbar.classList.add('fa-bars')
        iconbar.classList.remove("fa-window-close")
        iconbar.classList.remove("fas")
    }
}

window.addEventListener('load',function(){ 
    setTimeout(function(){
        var loadform= this.document.getElementById('load-form')
        loadform.classList.remove('loadformdisplay_off')
        loadform.classList.add('loadform')
    },2000)
})
var loadform= this.document.getElementById('load-form')
var closebtn = this.document.getElementById('form-close-btn')
closeclick=closebtn.addEventListener('click', function(){
        loadform.classList.remove('loadform')
        loadform.classList.add('loadformdisplay_off')
    })
// ===================================FORM VALIDATION================================
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var fname_error = document.getElementById("fname-error");
    var lname_error = document.getElementById("lname-error");
    var email_error = document.getElementById("email-error");
    var message_error = document.getElementById("message-error");
    var form =document.getElementById("form-submit")
    form.addEventListener('submit',function(e){
        
    if (fname.value ==="" || fname.value === null) {
        e.preventDefault();
        fname_error.innerText = "firstname is empty";
                  
    }
    if (lname.value ==="" || lname.value === null) {
        e.preventDefault();
        lname_error.innerText = "lastname is empty";
                  
    }
    if (email.value ==="" || email.value === null) {
        e.preventDefault();
        email_error.innerText = "email is empty";
                  
    }if (message.value ==="" || message.value === null) {
        e.preventDefault();
        message_error.innerText = "message is empty";
                  
    }
})


// validating pop contact
// 
class Validate{
    validate=()=>{ 
        var pop_form =document.getElementById("pop-form-submit")           
            pop_form.addEventListener('submit',function(e){
                var pop_fname = document.getElementById("pop-fname");
                var pop_lname = document.getElementById("pop-lname");
                var pop_email = document.getElementById("pop-email");
                var pop_message = document.getElementById("pop-message");
                var pop_fname_error = document.getElementById("pop-fname-error");
                var pop_lname_error = document.getElementById("pop-lname-error");
                var pop_email_error = document.getElementById("pop-email-error");
                var pop_message_error = document.getElementById("pop-message-error");
                
            if (pop_fname.value ==="" || pop_fname.value === null) {
                e.preventDefault();
                pop_fname_error.innerText = "firstname is empty";        
            }
            if (pop_lname.value ==="" || pop_lname.value === null) {
                e.preventDefault();
                pop_lname_error.innerText = "lastname is empty";
                        
            }
            if (pop_email.value ==="" || pop_email.value === null) {
                e.preventDefault();
                pop_email_error.innerText = "email is empty";
                        
            }if (pop_message.value ==="" || pop_message.value === null) {
                e.preventDefault();
                pop_message_error.innerText = "message is empty";
                        
            }
        })
    }
}

const vali= new Validate()


vali.validate()
















































