$(document).ready(function(){
    //global variables
    let playerTotal = 0;
    let botTotal = 0;
    let holder = 0;
    let botholder = 0;
    let finalPlayer = 0;
    let finalBot = 0;
    let playerHold = 0;
    let botHolding = false;
    let playerHolding = false;

    //Hides Add and Stop Buttons on load
    $("#secondSection").hide();
    $("#rules").hide();

    document.getElementById("rulesButton").addEventListener("click", function(){
        $("#rules").toggle();
        botStorage();
    })

    document.getElementById("stopBtn").addEventListener("click",function(){
        alert("You have chose to hold at "+playerTotal);
        playerHold++;
        $("#addBtn").hide();
        $("#stopBtn").hide();
        if(playerTotal >= botTotal){




            botTurn();
            if(botTotal > 52){
                alert("The Bot has busted! You have won with "+ playerTotal);
                console.log("Bot has busted");
                finalPlayer++;



                $("#playerFinal").html(finalBot);
            }
            if(botTotal <= playerTotal){
                while(botTotal < playerTotal){
                    botTurn(); 
                }
                console.log("Updated Bot total");
            }
            if(botTotal > playerTotal && botTotal < 52){
                alert("The Bot is higher than you! Their score is "+botTotal);
                console.log("Player lost to bot");
                finalBot++;
                $("#botFinal").html(finalBot);
            }
            if(botTotal == 52 && playerTotal==52){
                alert("It is a tie! Score is: "+botTotal);
                console.log("Wow! Both lost because of a tie of 52!");
            }
        }   
    })

    function botTurn(){
        botholder = randomGen();
        if(botTotal >= 48 && botTotal <=52){
            if(playerHold == 0){
                if(botHolding == false){

                    console.log("The bot will hold because it is close to break");
                    alert("Bot is holding their number is: "+botTotal);
                    botHolding = true;
                }
            }
        }
        else{
            $("#botNumbers").append(botholder + "<br />");
            botTotal += botholder;
            $("#botNum").html(botTotal);
            if(botTotal > 52){
                alert("The bot has busted! You win with " + playerTotal);
                console.log("The bot has busted. Player has won");
                playerTotal++;
                $("#playerFinal").html(finalBot);
            }
        }       
    }

    $("#addBtn").click(function(){
        let holder = randomGen();
        $("#yourNumbers").append(holder + "<br />");
        playerTotal += holder;
        $("#currentNum").html(playerTotal);
        if (playerTotal > 52){
            alert("Busted! The bot has won with " + botTotal);
            console.log("Player has busted");
            finalBot++;
            $("#botFinal").html(finalBot);
        }
        if(playerTotal <= 52){
            botTurn();
        }
    })

    $("#submitButton").click(function(){
        console.log("The game has started");
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
            console.log("The player has tried to enter a number not between 1 and 10");
        }
    })

    function randomGen(){
        let randomNum = (Math.random() * 9) + 1;
        return Math.round(randomNum);
    }

    function botStorage(){
        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("lastname", finalBot++ );
            // Retrieve
            document.getElementById("botFinal").innerHTML = localStorage.getItem("lastname");
        } else {
            document.getElementById("botFinal").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }


});





