"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// müsste gehen, sorry ;)
var jquery_1 = __importDefault(require("jquery"));
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
jquery_1.default(document.body).html(greeter2_1.greeter(sebastian) + emitCat(sebastian));
