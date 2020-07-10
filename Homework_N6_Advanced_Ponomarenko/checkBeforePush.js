export function checkBeforePush (arg, frame, check){

    JSON.parse(localStorage.getItem('userArray')).forEach((key,index,arr)=>{

        if(arg==arr[index].name){
            frame.setAttribute('class','input_frame_badacces');
            return check=false;   
        }
        else{ 
            frame.setAttribute('class','input_frame_acces');
            return check=true;
        }
    })
    return check

} 