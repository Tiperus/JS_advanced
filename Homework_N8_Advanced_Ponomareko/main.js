// import {
//     requestMove
// } from './request.js'
// import{
//     requestMoveID
// } from './requestID.js'
// let movieArr;

async function requestMove(nameMovi){
    let response = await fetch (`http://www.omdbapi.com/?${nameMovi}&plot=full&Season=1&apikey=f5124aab`)
    return await response.json()
};
async function requestMoveID (nameMovi){
    const request = await fetch (`http://www.omdbapi.com/?${nameMovi}&plot=full&apikey=f5124aab`)
    return await request.json()
};

let mainBox=document.getElementById('main');
let detailsBox=document.getElementById('details');
let inputValue=document.forms['moveRequest']['moveName'];
document.getElementById('request').addEventListener('click', function(){
 

    requestMove(`s=${inputValue.value}`)
    .then(movieArr=>{
        for(let i=0; i<=movieArr.Search.length; i++){
        let posterCart=document.createElement('div');
        posterCart.setAttribute('class','poste');
        let posterImage=document.createElement('div');
        posterImage.setAttribute('class', 'posterImage');
        posterImage.style.backgroundImage=`url(${movieArr.Search[i].Poster})`;
        let posterYear=document.createElement('p');
        posterYear.innerText=movieArr.Search[i].Year;
        posterYear.setAttribute('class', 'posterYear');
        let posterTitle=document.createElement('p');
        posterTitle.innerText=movieArr.Search[i].Title;
        posterTitle.setAttribute('class', 'posterTitle');
        let btnPosterDetails=document.createElement('button');
        btnPosterDetails.innerText='Details';
        btnPosterDetails.setAttribute('class', `btn class`+[i]+``);
        btnPosterDetails.addEventListener('click',function(){
            mainBox.setAttribute('class','disabled')
            detailsBox.setAttribute('class','main')
            requestMoveID(`i=${movieArr.Search[i].imdbID}`)
            .then(movieDetail=>{

            // console.log(movieDetail)
                let posterImageID=document.createElement('div');
                posterImageID.setAttribute('class', 'posterImage');
                posterImageID.style.backgroundImage=`url(${movieDetail.Poster})`;
                
                let posterTitleID=document.createElement('p');
                posterTitleID.innerText=movieDetail.Title;
                posterTitleID.setAttribute('class', 'posterTitleID');
                let posterDateID=document.createElement('p');
                posterDateID.innerText='Date'+movieDetail.DVD;
                posterDateID.setAttribute('class', 'posterInformID');
                let posterInformID=document.createElement('p');
                posterInformID.innerHTML='Actors: '+movieDetail.Actors+"// "+" Awards: "+movieDetail.Actors+"// "+'Country: '+movieDetail.Country+"// "+'Director: '+movieDetail.Director+"// "+'About move: '+movieDetail.Plot;
                posterInformID.setAttribute('class', 'posterInformID');
                let btnDetailsClose=document.createElement('button');
                    btnDetailsClose.innerText='close';
                    btnDetailsClose.setAttribute('class', `btn class`+[i]+``);
                    btnDetailsClose.addEventListener('click',function(){
                        mainBox.setAttribute('class','main')
                        detailsBox.innerHTML='';
                    })
                
            
            detailsBox.appendChild(posterImageID);
            detailsBox.appendChild(posterTitleID);
            detailsBox.appendChild(posterDateID);
            detailsBox.appendChild(posterInformID);
            detailsBox.appendChild(btnDetailsClose);
        })
        .catch(error=>console.log(error))
        })

        posterCart.appendChild(posterImage);
        posterCart.appendChild(posterTitle);
        posterCart.appendChild(posterYear);
        posterCart.appendChild(btnPosterDetails);
        document.querySelector('.for_poster').appendChild(posterCart);
    }

    })
    .catch(error=>console.log(error))

    
})
