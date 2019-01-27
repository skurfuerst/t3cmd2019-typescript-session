// müsste gehen, sorry ;)
import $ from 'jquery';
import {User, greeter} from './greeter2';

interface HasCat {
    hatKatze: boolean;
}

function emitCat(x: HasCat) {
    return x.hatKatze;
}

let sebastian: User & HasCat = {
    //firstName: "Sebastian",
    lastName: "Kurfürst",
    event: "TYPO3 Barcamp",
    hatKatze: true
};

$(document.body).html(greeter(sebastian) + emitCat(sebastian));