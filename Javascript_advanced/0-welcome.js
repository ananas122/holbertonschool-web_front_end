function welcome(firstName, lastName) {

    var fullName = firstName + " " + lastName; 
    
    

    function displayFullName(){
        alert("Welcome " + fullName + "!");
    }

    displayFullName();
}
welcome('eggceptional', 'individual')

// error Can't find variable: fullName , its private var of function welcome
alert(fullname);