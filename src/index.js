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
component();