export function requestMoveID (nameMovi){
    const request = new XMLHttpRequest()
    request.open('GET',`http://www.omdbapi.com/?${nameMovi}&plot=full&apikey=f5124aab`, false)
    request.send()
    const unswer = request.responseText;
    console.log(JSON.parse(unswer))
    return JSON.parse(unswer)
}