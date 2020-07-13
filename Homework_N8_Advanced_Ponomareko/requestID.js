export function requestMoveID (nameMovi){
    
    const request = fetch(`http://www.omdbapi.com/?${nameMovi}&plot=full&apikey=f5124aab`)
    return await request.json()
 
   
}