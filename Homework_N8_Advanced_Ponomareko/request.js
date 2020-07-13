// export function requestMove (nameMovi){
    // const request = new XMLHttpRequest()
    // request.open('GET',`http://www.omdbapi.com/?${nameMovi}&plot=full&Season=1&apikey=f5124aab`,false)
    
        // request.send()
    // request.onreadystatechange = function(){
    // if(request.readyState==4&& request.status==200){    
        // const unswer = request.responseText;
        // return JSON.parse(unswer)
    // }
    // }
export async function requestMove(nameMovi){
    // console.log(nameMovi)
    let response = fetch(`http://www.omdbapi.com/?${nameMovi}&plot=full&Season=1&apikey=f5124aab`)
    return await response.json()
    console.log(response)
    // .then(unswer=>unswer.json())
}
// request().then(data=>console.log(data)).catch(error=>conasole.log(error))
// }
// async function getData(){
//     let response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b8ef8b9')
//     return await response.json()
// }
