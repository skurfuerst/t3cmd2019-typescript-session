import $ from 'jquery';

interface User {
    firstName: string;
    lastName: string;
    event: string;
}

interface HasCat {
    hatKatze: boolean;
}

function greeter(person: User) {
    return "Hello, " + person.firstName + " " +  person.lastName;
}

function emitCat(x: HasCat) {
    return x.hatKatze;
}

let sebastian: User & HasCat = {
    firstName: "Sebastian",
    lastName: "Kurfürst",
    event: "TYPO3 Barcamp",
    hatKatze: true
};

$(document.body).html(greeter(sebastian) + emitCat(sebastian));