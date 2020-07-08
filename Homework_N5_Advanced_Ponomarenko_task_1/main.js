function close(number){
    let num=number;
    
    function inner(number){
    num += number
    console.log(num) 
    }
    return inner
}

let add =close(0);
add(3)
add(5)
add(100)

