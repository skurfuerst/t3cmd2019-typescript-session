"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function emitCat(x) {
    return x.hatKatze;
}
var sebastian = {
    firstName: "Sebastian",
    lastName: "Kurfürst",
    event: "TYPO3 Barcamp",
    hatKatze: true
};
jquery_1["default"](document.body).html(greeter(sebastian) + emitCat(sebastian));
