var counter = parseInt(prompt(" Insert the start point of the counter", 0));
var button = document.getElementById("clickme");
var startPoint = button.innerHTML = "Click me "+ counter;
// button.onclick = function() {
//   counter += 1;
//   button.innerHTML = "Click me " + counter;
// };

// module.exports = {
//   onclick,  
// };

$ (function(){
    $("#clickme").on("click", function(){
    counter +=1;
    button.innerHTML = "Click me " + counter;
    });
    });