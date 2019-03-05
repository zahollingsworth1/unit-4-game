$(document).ready(function() {
	var totalNumber;
	var swirl1Num;
	var swirl2Num;
	var swirl3Num;
    var swirl4Num;
    var yourScore = 0;
	var wins = 0;
    var losses = 0;
    
    $('.dropdown-toggle').dropdown()
    
//RANDOM NUMBER CALL
	function newNumbers() {
		totalNumber = Math.floor(Math.random() * 100) + 20;
		swirl1Num = Math.floor(Math.random() * 13 +1);
		swirl2Num = Math.floor(Math.random() * 13 +1);
		swirl3Num = Math.floor(Math.random() * 13 +1);
        swirl4Num = Math.floor(Math.random() * 13 +1);
        
        console.log(totalNumber, swirl1Num, swirl2Num, swirl3Num, swirl4Num)
	}

//RESET
	function newGame() {
		newNumbers();
		yourScore = 0;
		$("#totalNumber").text(totalNumber);
		$("#swirl1").attr("data-swirlvalue", swirl1Num);
		$("#swirl2").attr("data-swirlvalue", swirl2Num);
		$("#swirl3").attr("data-swirlvalue", swirl3Num);
        $("#swirl4").attr("data-swirlvalue", swirl4Num);
        $("#yourScore").text(yourScore);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

		console.log(totalNumber, swirl1Num, swirl2Num, swirl3Num, swirl4Num)
	}
//winner winner
	function win() {   
        $("#winOrLose").text("YOU WIN! PRESS NEW GAME TO PLAY AGAIN");
		wins++;
        $("#wins").text(wins);       
	}
//lose function
	function lose() {   
        $("#winOrLose").text("YOU LOSE. PRESS NEW GAME TO PLAY AGAIN");
		losses++;
        $("#losses").text(losses);       
	}

//begining/refresh start
    newGame();
    
//hover on and off function   
    $(".swirlImg").hover(
        function() {
		    $(this).css({opacity: 0.5});
	        },
	    function() {
            $(this).css({opacity: 1});
        }
    );

    $(".colordrop").hover(
        function() {
		    $(this).css({opacity: 0.5});
	        },
	    function() {
            $(this).css({opacity: 1});
        }
    );

// Function to add the swirl values together
    
    $(".swirlImg").on("click", function() {
        
        //stops game from going
        if (yourScore >= totalNumber) {
			return;
		}

        var swirlValue = $(this).attr("data-swirlvalue");
        console.log(swirlValue);
        
        //turn attr to number
        swirlValue = parseInt(swirlValue);
        console.log(swirlValue);
        
        yourScore += swirlValue;
		$("#yourScore").text(yourScore);

		if (yourScore === totalNumber) {
			win();
		} else if (yourScore > totalNumber) {
			lose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});
