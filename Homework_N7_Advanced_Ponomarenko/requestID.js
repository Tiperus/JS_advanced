export function requestMoveID (nameMovi){
    const request = new XMLHttpRequest()
    request.open('GET',`http://www.omdbapi.com/?${nameMovi}&plot=full&apikey=f5124aab`,false)
    request.send()
    // request.onreadystatechange = function(){
    //     if(request.readyState==4&& request.status==200){    
            const unswer = request.responseText;
            console.log(JSON.parse(unswer))
            return JSON.parse(unswer)
        // }
    // }
   
}