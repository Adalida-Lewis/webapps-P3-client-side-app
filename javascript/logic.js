$(document).ready(function(){
//global variables
let playerTotal = 0;
let holder = 0;
//Hides Add and Stop Buttons on load
$("#secondSection").hide();
    
function randomGen(){
        var randomNum = (Math.random() * 10) + 1;
        return Math.round(randomNum);
    }

$("#addNum").click(function(){
    let holder = randomGen();
    $("#yourNumbers").append(holder + "<br />");
    playerTotal += holder;
    $("#currentNum").html(playerTotal);
})
      
$("#submitButton").click(function(){
    let firstNumber = $("#startValue").val();
    $("#yourNumbers").append(firstNumber + "<br>");
    playerTotal += parseInt(firstNumber);
    $("#currentNum").html(playerTotal);
    $("#firstSection").toggle();
    $("#secondSection").show();
});


})

