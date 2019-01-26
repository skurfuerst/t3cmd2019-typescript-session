function greeter(person: string) {
    return "Hello, " + person;
}

let user = "TYPO3 User";

document.body.innerHTML = greeter(user);