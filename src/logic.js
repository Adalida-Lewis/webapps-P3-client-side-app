$(document).ready(function(){
    //global variables
    let playerTotal = 0;
    let botTotal = 0;
    let playerHolder = 0;
    let botholder = 0;
    let finalBot = 0;
    let endVar = 0;

    let sessionBotNum = localStorage.getItem('counter');
    $("#result").html(sessionBotNum);

    let sessionPlayerNum = localStorage.getItem('playerCounter');
    $("#playerFinal").html(sessionPlayerNum);

    //Hides Add and Stop Buttons on load
    $("#secondSection").hide();
    $("#rules").hide();

    $("#submitButton").click(function(){
        let firstNumber = $("#startValue").val();
        submitFirst(firstNumber);
    })

    $("#addBtn").click(function(){
        let playerHolder = randomGen();
        addingNums(playerHolder);
    })    

    function randomGen(){
        let randomNum = (Math.random() * 9) + 1;
        return Math.round(randomNum);
    }

    function submitFirst(num2){
        if(num2 >= 10){
            return "Error Number is greater than 10";
        }
        if(num2 < 0){
            return "Error Number is less than 0";
        }
        console.log("Valid starting input. The game has started.");
        
        if(firstNumber >= 1 && firstNumber <= 10){
            $("#yourNumbers").append(firstNumber + "<br>");
            playerTotal += parseInt(firstNumber);
            $("#currentNum").html(playerTotal);
            botTurn();
            $("#firstSection").toggle();
            $("#secondSection").show();
        }
        else{
            console.log("You have entered an invalid number");
            alert("Invalid Input! Please enter a number between 1 - 10");
        }
    }

    function addingNums(num1){

        

        $("#yourNumbers").append(num1 + "<br />");
        playerTotal += num1;
        $("#currentNum").html(playerTotal);
        if(playerTotal >= 52){
            alert("Busted! The bot has won with " + botTotal);
            console.log("Player has busted");
            finalBot++;
            $("#botFinal").html(finalBot);
            if (sessionBotNum === null) {
                sessionBotNum = 0;
            } else {
                sessionBotNum++;
            }
            localStorage.setItem("counter", sessionBotNum);  
        }
        else{
            botTurn();
        } 
        if(botTotal >= 52){
            console.log("Bot has busted");
            finalBot++;
            $("#botFinal").html(finalBot);
            return(alert("The bot has lost with " + botTotal););
            if (sessionPlayerNum === null) {
                sessionPlayerNum = 0;
            } else {
                sessionPlayerNum++;
            }
            localStorage.setItem("playerCounter", sessionPlayerNum);   
        }
    }
    
    function botTurn(){
        botholder = randomGen();
        console.log("Bot has generated a number");
        $("#botNumbers").append(botholder + "<br />");
        botTotal += botholder;
        $("#botNum").html(botTotal);
    }
    
    function checkValue(num3){
        if(num < 10){
            return 0;
        }
        if(num >= 10){
            return 1;
        }
        if(num >=0){
            return 0;
        }
    }

});
