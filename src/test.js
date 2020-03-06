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
        submitFirst();
    })

    $("#addBtn").click(function(){
        addingNums()
    })    

    function randomGen(){
        let randomNum = (Math.random() * 9) + 1;
        return Math.round(randomNum);
    }

    function submitFirst(){
        console.log("Valid starting input. The game has started.");
        let firstNumber = $("#startValue").val();
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
    
    function addingNums(){
        let playerHolder = randomGen();
        $("#yourNumbers").append(playerHolder + "<br />");
        playerTotal += playerHolder;
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
            alert("The bot has lost with " + botTotal);
            console.log("Bot has busted");
            finalBot++;
            $("#botFinal").html(finalBot);
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
    
    






});
