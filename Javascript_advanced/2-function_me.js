function welcomeMessage(fullName) {
    // return function interne  : closure
    return function() {
        alert("Welcome " + fullName);
    };
}
// cretaes var which is closure with arg
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
