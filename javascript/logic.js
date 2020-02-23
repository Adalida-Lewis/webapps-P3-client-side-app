$(document).ready(function(){
    //global variables
    let playerTotal = 0;
    let botTotal = 0;
    let holder = 0;
    let botholder = 0;
    let finalPlayer = 0;
    let finalBot = 0;
    let control = 0;
    //Hides Add and Stop Buttons on load
    $("#secondSection").hide();

    document.getElementById("stopBtn").addEventListener("click",function(){
        alert("You have chose to hold at "+playerTotal);
        $("#addBtn").hide();
        $("#stopBtn").hide();
        if(playerTotal >= botTotal){
            botTurn();
            if(botTotal > 52){
                alert("The Bot has busted! You have won with "+ playerTotal);
                finalPlayer++;
                $("#playerWins").html(finalPlayer);  
            }
            if(botTotal <= playerTotal){
//                alert("The bot did not make it! Their score is: " + botTotal);
                while(botTotal < playerTotal){
                   botTurn(); 
                }
                
                alert("Their Total is now: " + botTotal);
            }
            if(botTotal > playerTotal){
                alert("The Bot is higher than you! Their score is "+botTotal);
                finalBot++;
            }
//            if(botTotal == playerTotal){
//                alert("It is a tie! Score is: "+botTotal);
//                
//            }

        }   
    })

    function botTurn(){
        botholder = randomGen();
        
        if(botTotal >= 48 && botTotal <=52){
            if(control == 0){
                console.log("Do nothing!");
                alert("Current number is: "+botTotal);
                control++;
            }
            
        }
        else{
        $("#botNumbers").append(botholder + "<br />");
        botTotal += botholder;
        $("#botNum").html(botTotal);
        if(botTotal > 52){
            alert("The bot has busted! You win with " + playerTotal);
            playerTotal++;

        }
            }
    }
    function randomGen(){
        var randomNum = (Math.random() * 10) + 1;
        return Math.round(randomNum);
    }

    $("#addBtn").click(function(){
        let holder = randomGen();
        $("#yourNumbers").append(holder + "<br />");
        playerTotal += holder;
        $("#currentNum").html(playerTotal);
        if (playerTotal > 52){
            alert("Busted! The bot has won with " + botTotal);
            finalBot++;
        }

        if(playerTotal <= 52){
            botTurn();
        }
    })

    $("#submitButton").click(function(){
        let firstNumber = $("#startValue").val();
        if(firstNumber >= 1 && firstNumber <= 10){
            
        
        $("#yourNumbers").append(firstNumber + "<br>");
        playerTotal += parseInt(firstNumber);
        $("#currentNum").html(playerTotal);
        $("#firstSection").toggle();
        $("#secondSection").show();
            }
        else{
            alert("Invalid Input! Please enter a number between 1-10");
        }
    });

})

