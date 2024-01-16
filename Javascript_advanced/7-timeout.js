
console.log("Start of the execution queue")
setTimeout(function() {
    console.log("Final code block to be executed");
}, 0);
//Using a loop that iterates 100 times, each iteration logs to the console the iteration number
for (let i = 1; i <= 100; i++) {
        console.log(i);
}

console.log("End of the loop printing");
