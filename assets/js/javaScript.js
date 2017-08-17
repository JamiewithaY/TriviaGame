

$(document).ready(function(){
 

$(".btn1").click(function(){

var timeLeft = 120;
var timerId = setInterval(countdown, 1000);


		function countdown() {
 	 if (timeLeft == -1 ) {
    	clearInterval(timerId);
    	alert("Time is up!");
    	alert("Final Score Says...Total Correct: " + correct + " Total Incorrect: " + incorrect);
    	return;
  } else  {
    	$('#countdown').html(timeLeft + " seconds left");
    	timeLeft--;    	
  }
  }
  $(".btn2").click(function(){
	clearInterval(timerId);
	timeLeft = 0;
	$(".btn1").html("0");
	alert("Final Score Says...Total Correct: " + correct + " Total Incorrect: " + incorrect);
	
});

});


	
//scoreboard variable
	correct = 0;
	incorrect= 0;
	

//question1
	$("#true1").click(function(){
		alert("True! Totally Gross-zilla!");
		correct ++;
	});
	$("#false1").click(function(){
		alert("Wrong, Wrong, Wrong");
		incorrect ++;
	});

    $(".radio-inline1").click(function(){
    	$("#question1").hide(2000);

    });   

//Question2

     $("#true2").click(function(){
		alert("Not even a little true. Sorry, that is incorrect");
		incorrect ++;
	});
	$("#false2").click(function(){
		alert("False! Holy No, that's ridiculous.");
		correct ++;
	});

    $(".radio-inline2").click(function(){
    	$("#question2").hide(2000);

    });   

//Question3

      $("#true3").click(function(){
		alert("True! You better believe it.");
		correct ++;
	});
	$("#false3").click(function(){
		alert("Wrong, Wrong, Wrong");
		incorrect ++;
	});

    $(".radio-inline3").click(function(){
    	$("#question3").hide(2000);

    });   

//Question4

      $("#true4").click(function(){
		alert("No way! This is definately not a thing.");
		incorrect ++;
	});
	$("#false4").click(function(){
		alert("False! This is 100% false and too scary to even think about.");
		correct ++;
	});

    $(".radio-inline4").click(function(){
    	$("#question4").hide(2000);

    });   

//Question5

     $("#true5").click(function(){
		alert("True! Oreos were introduced in 1912. Chocolate Chip Cookies were invented circa 1938.");
		correct ++;
	});
	$("#false5").click(function(){
		alert("Wrong, Wrong, Wrong");
		incorrect ++;
	});

    $(".radio-inline5").click(function(){
    	$("#question5").hide(2000);
    });   

//Question6

	$("#true6").click(function(){
		alert("Wrong. It was the 14th dummy.");
		incorrect ++;
	});
	$("#false6").click(function(){
		alert("False! It was the 14th.");
		correct ++;
	});

    $(".radio-inline6").click(function(){
    	$("#question6").hide(2000);

    });   

//Question7
$("#true7").click(function(){
		alert("No way!");
		incorrect ++;
	});
	$("#false7").click(function(){
		alert("False! Only 1/2 of the earthworm can regenerate.");
		correct ++;
	});

    $(".radio-inline7").click(function(){
    	$("#question7").hide(2000);

    }); 

//Question8
$("#true8").click(function(){
		alert("True! You bet your booty.");
		correct ++;
	});
	$("#false8").click(function(){
		alert("Wrong, Wrong, Wrong");
		incorrect ++;
	});

    $(".radio-inline8").click(function(){
    	$("#question8").hide(2000);

    });   

//Question9
$("#true9").click(function(){
		alert("True! Ahoy ladies." );
		correct ++;
	});
	$("#false9").click(function(){
		alert("Wrong, Wrong, Wrong");
		incorrect ++;
	});

    $(".radio-inline9").click(function(){
    	$("#question9").hide(2000);

    });   

//Question10
$("#true10").click(function(){
		alert("True! Yuck.");
		correct ++;
	});
	$("#false10").click(function(){
		alert("Wrong, Wrong, Wrong");
		incorrect ++;
	});

    $(".radio-inline10").click(function(){
    	$("#question10").hide(2000);

    });   









   
  });


	