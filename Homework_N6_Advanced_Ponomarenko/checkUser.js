export function checkUser (arg1, arg2, frame1, frame2, formSingUp, formOpen, customerCart){

    JSON.parse(localStorage.getItem('userArray')).forEach((key,index,arr)=>{

        if(arg1==arr[index].email&&arg2==arr[index].pass){
            formSingUp.setAttribute('class','disabled');
            formOpen.setAttribute('class','disabled');
            customerCart.setAttribute('class','customerCart');
            document.querySelector('.window_w_0').innerText=arr[index].name;
            document.querySelector('.window_w_1').innerText=arr[index].sname;
            document.querySelector('.window_w_2').innerText=arr[index].email;
            document.querySelector('#email_open').value='';
            document.querySelector('#password_open').value='';
        }
        else{ 
            // if(arg1!==arr[index].email){
            // frame1.setAttribute('class','input_frame_badacces');

            // }
            // else if (arg1!==arr[index].pass){
            // frame2.setAttribute('class','input_frame_badacces');
            // }
            formSingUp.setAttribute('class','persone_cart');
            formOpen.setAttribute('class','disabled');
            customerCart.setAttribute('class','disabled');
            document.querySelector('#email_open').value='';
            document.querySelector('#password_open').value='';
        }
    })
    document.querySelector('.sing_out').addEventListener('click', function(){
        formSingUp.setAttribute('class','disabled');
        formOpen.setAttribute('class','persone_cart');
        customerCart.setAttribute('class','disabled');
        document.querySelector('#email_open').value='';
        document.querySelector('#password_open').value='';
    });

} 