
var wins = 0;
var loses = 0;
var userNum;
var counter = 0;
var targetNum;
var userNum;


var reset = function () {
   
    
    $(".crystals").empty();
    
    

    for (var i = 0; i < 4; i++) {
        var randomNum = Math.floor(Math.random() * 14) + 1;
        console.log(randomNum);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-num": randomNum
        });
        $(".crystals").append(crystal);
        console.log(crystal);
    }
}


reset();
var numToGuess = Math.floor(Math.random() * 70) + 30;
$("#number-to-guess").append(numToGuess);

$(".crystal").on("click", function () {
    var num = parseInt($(this).attr("data-num"));
    counter += num;
    console.log(counter);

    $("#userNumber").text("Number: " + counter);

    if (counter === numToGuess) {
        wins++
        $("#wins").append(wins);
        reset();

    }
    else if (counter > numToGuess) {
        loses++
        $("#loses").append(loses);
        reset();
    }


});

