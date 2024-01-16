// Create var with value 
let globalVariable = "Welcome";

// Create function 
function outer() {
    alert(globalVariable);
    let course = "Holberton";
    
    function inner() {
        alert(globalVariable + " " + course) // " " concatenation of 2 var
        let exclamation = "!"
    
        function inception() {
            alert(globalVariable + " " + course + exclamation)
            
    }
        inception();
    }
    inner();
}
outer();
