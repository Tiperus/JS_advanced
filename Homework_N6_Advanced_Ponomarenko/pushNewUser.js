export function pushNewUser(arr,newUser){
    arr.push(newUser)
    console.log(arr)
    let dataBaseUser=JSON.stringify(arr);
    localStorage.setItem('userArray',dataBaseUser)
}
