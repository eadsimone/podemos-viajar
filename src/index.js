/**
 * Created by edesimone on 12/12/17.
 */
import _ from 'lodash';
import './scss/main.scss';
import imgLogo from './images/wwen_logo.png';
import imgt1 from './images/Museofangio.jpg';
import imgt2 from './images/museohistorico.jpg';


function component() {
    var imageLogo = document.getElementById("wwen_logo");
    imageLogo.src = imgLogo;

    for(let i=1; i<=6; i++) {
        var id= "turismo"+i;
        var turismoid = document.getElementById(id);
        if( (i%2) === 0){
            turismoid.src = imgt1;
        }else{
            turismoid.src = imgt2;
        }
    }
}
//component();
function requestTouristItems(){
    $.ajax({
        url: 'http://localhost:7800/touristitems.json#',
        method: 'GET'
    }).then(function(data) {
        console.log(data);
        renderTourist(data);
    });

};

function renderTourist(data) {
    console.log(jQuery.fn.jquery);
    var html="";

    html+='<div id="main-tourist" class="row">';
    for (var i=0;i < data.length; i++ ){

        // if(i%3 == 0){
        //     if(i!=0){
        //      html+='</div>';
        //     }
        //     html+='<div id="main-tourist" class="row">';
        // }
        html+='<div class="col-6 col-sm-4 col-md-4"><img src="'+ data[i].image +'" alt="" id="'+ data[i].id +'" class="mw-50 img-fluid pv-rounded">'+ data[i].title +'</div>';
    }
    html+='</div>';
    $("#main-tourist" ).html(html);
}
requestTouristItems();