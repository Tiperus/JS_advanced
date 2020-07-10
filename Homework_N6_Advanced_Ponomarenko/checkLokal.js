export function checkLocalStorsge(check, arr){
    if((localStorage.getItem('userArray'))==undefined){
        let dataBaseUser=JSON.stringify(arr);
        localStorage.setItem('userArray',dataBaseUser)
      return  check=true;
    }
    else if((localStorage.getItem('userArray')).length==0){
       return check=true;
    }
    else if((localStorage.getItem('userArray')).length>1){
       return check=false;
    }
    else{

       return check=true;
    }
}