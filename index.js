var counter = parseInt(prompt(" Insert the start point of the counter", 0));
var button = document.getElementById("clickme");
var startPoint = button.innerHTML = "Click me "+ counter;
button.onclick = function() {
  counter += 1;
  button.innerHTML = "Click me " + counter;
};

module.exports = {
  onclick,  
};

// $ (function(){
//     var count = counter;
//     $("#clickme").on("click", function(){
//     count +=1
//     });
//     });