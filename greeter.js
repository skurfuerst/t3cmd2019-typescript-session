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
document.body.innerHTML = greeter(sebastian) + emitCat(sebastian);
