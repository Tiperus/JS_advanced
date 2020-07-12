import {
    requestMove
} from './request.js'
import {
    requestMoveID
} from './requestID.js'
let mainBox=document.getElementById('main');
let detailsBox=document.getElementById('details');
let inputValue=document.forms['moveRequest']['moveName'];
document.getElementById('request').addEventListener('click', function(){
    let movieArr=requestMove(`s=[${inputValue.value}]`)
    console.log(movieArr.Search.length)
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
            let movieDetail=requestMoveID(`i=${movieArr.Search[i].imdbID}`)
            mainBox.setAttribute('class','disabled')
            detailsBox.setAttribute('class','main')
            console.log(movieDetail)
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

        posterCart.appendChild(posterImage);
        posterCart.appendChild(posterTitle);
        posterCart.appendChild(posterYear);
        posterCart.appendChild(btnPosterDetails);
        document.querySelector('.for_poster').appendChild(posterCart);
    }

})
