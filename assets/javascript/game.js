var wins = 0;
var loses = 0;
var userNum;
var counter = 0;
var targetNum;
var userNum;
var numToGuess;

var reset = function () {
   
    $(".crystals").empty();
    
    var images = ['https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/ce/Crystal_common.png/revision/latest?cb=20151121233809',
            'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c8/Crystal_urgentcharacter.png/revision/latest?cb=20151122000356',
            'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642',
            'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/10/Arena_Crystal.png/revision/latest?cb=20150825214845',]
  
   
    
     numToGuess = Math.floor(Math.random() * 70) + 30;
     $("#number-to-guess").html("Number to Guess: " + numToGuess);
    

    for (var i = 0; i < 4; i++) {
        var randomNum = Math.floor(Math.random() * 14) + 1;
        console.log(randomNum);

        var crystal = $("<div>");
            crystal.attr({
            "class": 'crystal',
            "data-num": randomNum
            });
            crystal.css({
                "background-image":"url('" + (images[i]) + "')",
                "background-size":"cover",
                // "background-color":"gray",
            
            });
        
        
        $(".crystals").append(crystal);
        console.log(crystal);
    }
}

    
    
   

reset();
// var numToGuess = Math.floor(Math.random() * 70) + 30;
// $("#number-to-guess").append(numToGuess);

$(document).on("click", ".crystal", function () {
    var num = parseInt($(this).attr("data-num"));
    counter += num;
    console.log(counter);

    $("#userNumber").text("Number: " + counter);

    if (counter === numToGuess) {
        wins++;
        alert("Winner Winner.. Chicken Dinner..  " + counter);
        counter = 0;
        $("#wins").html("Wins: " + wins);
        reset();

    }
    else if (counter > numToGuess) {
        loses++;
        alert("Final number: " + counter + " Too High!! Try Again");
        counter = 0;
        $("#loses").html("Loses: " + loses);
        reset();
    }


});
