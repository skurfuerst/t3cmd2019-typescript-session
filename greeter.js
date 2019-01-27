"use strict";
exports.__esModule = true;
// müsste gehen, sorry ;)
// import $ from 'jquery';
var greeter2_1 = require("./greeter2");
function emitCat(x) {
    return x.hatKatze;
}
var sebastian = {
    //firstName: "Sebastian",
    lastName: "Kurfürst",
    event: "TYPO3 Barcamp",
    hatKatze: true
};
document.body.innerHTML = greeter2_1.greeter(sebastian) + emitCat(sebastian);
