let getSel=(sel) => document.querySelector(sel);
let localStorageArray=[];
let name;
let sname;
let emailCheck;
let passwordCheck;
let checkArrayName;
let checkArraySname;
let checkArrayEmail;
let checkArrayPass;
let posibleToAdd;
let first;

import {
    pushNewUser
    } from './pushNewUser.js';
import {
    changeClass
    } from './cangeClass.js';
import {
    checkLocalStorsge
} from './checkLokal.js';
first=checkLocalStorsge(first, localStorageArray);
// console.log(first);

import {
    checkBeforePush
} from './checkBeforePush.js';
let singUpForm=document.forms["singUp"];
let openForm=document.forms["openAcc"];
let userFormCart=document.forms["userCart"];
if(first){
    singUpForm.setAttribute('class','persone_cart');
    openForm.setAttribute('class','disabled');
}
else{
    singUpForm.setAttribute('class','disabled');
    openForm.setAttribute('class','persone_cart')
}
import{
    checkUser
} from './checkUser.js';
let btnOpenAcc=document.forms['openAcc']['btnOpenAcc'];
let openAccEmail=document.forms['openAcc']['email_open'];
let openAccPass=document.forms['openAcc']['password_open'];
let openAccFrameEmail=getSel('#email_div_open');
let openAccFramePass=getSel('#password_div_open');

let firstName = getSel('#first_name')
let firstNameLabel=getSel("#first_name_label")
let firstNameFrame=getSel("#first_name_div")

changeClass(firstName, firstNameLabel, firstNameFrame)

let secondName = getSel('#second_name')
let secondNameLabel=getSel("#second_name_label")
let secondNameFrame=getSel("#second_name_div")
changeClass(secondName, secondNameLabel, secondNameFrame)

let email =getSel('#email');
let emailLabel =getSel('#email_label');
let emailFrame =getSel('#email_div');
changeClass(email, emailLabel, emailFrame)

let password=getSel('#password');
let passwordLabel =getSel('#password_label');
let passwordFrame =getSel('#password_div');
changeClass(password, passwordLabel, passwordFrame)

let singUp=document.forms["singUp"]["btnSingUp"]
singUp.addEventListener('click',function(){
    let valName=/^[A-Z][a-z]+$/;    
    if(valName.test(firstName.value)){
        firstNameFrame.setAttribute('class','input_frame_acces');
        name=true;
     }
     else{
        firstNameFrame.setAttribute('class','input_frame_error');
        name=false; 
     }
     let  valSecondName=/^[A-Z][a-z]+$/;
     if(valSecondName.test(secondName.value)){
        secondNameFrame.setAttribute('class','input_frame_acces');
        sname=true;
     }
    else{
        secondNameFrame.setAttribute('class','input_frame_error');
        sname=false;
    }
    let  valEmail=/^(\w+)@\w+(\.[a-z]{2,3})$/i;
        if(valEmail.test(email.value)){
        emailFrame.setAttribute('class','input_frame_acces');
        emailCheck=true;
    }
   else{
        emailFrame.setAttribute('class','input_frame_error');
        emailCheck=false;
   }
    let  valPassword=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(valPassword.test(password.value)){
        passwordFrame.setAttribute('class','input_frame_acces');
        passwordCheck=true;
    }
   else{
        passwordFrame.setAttribute('class','input_frame_error');
        passwordCheck=false;
   }
      let newUser= new User(firstName.value, secondName.value, email.value, password.value)
        newUser.checkAndPush()
        // console.log(posibleToAdd)
        // console.log(JSON.parse(localStorage.getItem('userArray')))
     if(name&&sname&&emailCheck&&passwordCheck&&posibleToAdd){
        localStorageArray=JSON.parse(localStorage.getItem('userArray'))
            pushNewUser(localStorageArray,newUser)
            posibleToAdd=false;
            singUpForm.setAttribute('class','disabled');
            openForm.setAttribute('class','persone_cart');
            userFormCart.setAttribute('class','disabled');
            firstName.value='';
            secondName.value='';
            email.value='';
            password.value='';
     }
});

class User{
    constructor(name, sname, email, pass){
        this.name=name;
        this.sname=sname;
        this.email=email;
        this.pass=pass;
    }
    checkAndPush(){
        if(first){
            posibleToAdd=true;
            first=false;
        }
        else{
            checkArrayName=checkBeforePush(this.name,firstNameFrame,checkArrayName)
            checkArraySname=checkBeforePush(this.sname,secondNameFrame,checkArraySname)
            checkArrayEmail=checkBeforePush(this.email,emailFrame,checkArrayEmail)
            checkArrayPass=checkBeforePush(this.pass,passwordFrame,checkArrayPass)
        }
        if(checkArrayName&&checkArraySname&&checkArrayEmail&&checkArrayPass){
            posibleToAdd=true;
        }
    }
}

btnOpenAcc.addEventListener('click', function(){

    checkUser(openAccEmail.value, openAccPass.value,openAccFrameEmail,openAccFramePass,singUpForm,openForm, userFormCart)
    
})
// console.log(JSON.parse(localStorage.userArray)[0].name)
