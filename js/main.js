// JavaScript Document
var x = "x";
var o = "o";
var turn = true;
var count= 0;
var o_win = 0;
var x_win = 0;

var juego = {

    setTurn : function(li, i){
      return function(){
        var self = juego;
        var one = document.getElementById("one");
        var two = document.getElementById("two");
        var three = document.getElementById("three");
        var four = document.getElementById("four");
        var five = document.getElementById("five");
        var six = document.getElementById("six");
        var seven = document.getElementById("seven");
        var eight = document.getElementById("eight");
        var nine = document.getElementById("nine");

        if(turn){
            if(li.textContent === "+"){
              li.innerHTML = "X";
            }
        }else {
          if(li.textContent === "+"){
            li.innerHTML = "O";
          }
        }
        turn = !turn;
        if (one.textContent === "O" && two.textContent === "O" && three.textContent === "O"
        || four.textContent === "O" && five.textContent === "O" && six.textContent === "O"
        || seven.textContent === "O" && eight.textContent === "O" && nine.textContent === "O"
        || three.textContent === "O" && five.textContent === "O" && seven.textContent === "O"
        || one.textContent === "O" && five.textContent === "O" && nine.textContent === "O"
        || one.textContent === "O" && four.textContent === "O" && seven.textContent === "O"
        || two.textContent === "O" && five.textContent === "O" && eight.textContent === "O"
        || three.textContent === "O" && six.textContent === "O" && nine.textContent === "O"){
          var win = document.querySelector("#winner");
          win.innerHTML = "The winner is number 1";
          console.log("Ganooooo 1");
        }else if(one.textContent === "X" && two.textContent === "X" && three.textContent === "X"
        || four.textContent === "X" && five.textContent === "X" && six.textContent === "X"
        || seven.textContent === "X" && eight.textContent === "X" && nine.textContent === "X"
        || three.textContent === "X" && five.textContent === "X" && seven.textContent === "X"
        || one.textContent === "X" && five.textContent === "X" && nine.textContent === "X"
        || one.textContent === "X" && four.textContent === "X" && seven.textContent === "X"
        || two.textContent === "X" && five.textContent === "X" && eight.textContent === "X"
        || three.textContent === "X" && six.textContent === "X" && nine.textContent === "X"){
          var win = document.querySelector("#winner");
          win.innerHTML = "The winner is number 2";
          console.log("Ganooooo 2");
        }
      };
    },
    clear: function(){
      var self = juego;
      var boton = document.getElementById("game");
      boton.value = "+";
    },//clear nofunciona

};

document.addEventListener("DOMContentLoaded",function(event){
  var i=0;
  var box = document.getElementById("box");
  var elements = box.querySelectorAll("#game  button");
  for(i=0 ; i<elements.length ; i++ ){
    elements[i].addEventListener(
      "click",
      juego.setTurn(elements[i],i)
    );
  }

  var buttom_clear = box.querySelector("#reset");
  buttom_clear.addEventListener("click" , box.clear);

});






/*jquery(document).ready(function() {
var x = "x";
var o = "o";
var count = 0;
var o_win = 0;
var x_win = 0;
$('#game li').click(function(){

  if (one.hasClass('o') && two.hasClass('o')
  && $("#three").hasClass('o') || $("#four").hasClass('o')
   && $("#five").hasClass('o') && $("#six").hasClass('o')
   || $("#seven").hasClass('o') && $("#eight").hasClass('o')
   && $("#nine").hasClass('o') || $("#one").hasClass('o')
   && $("#four").hasClass('o') && $("#seven").hasClass('o')
   || $("#two").hasClass('o') && $("#five").hasClass('o')
   && $("#eight").hasClass('o') || $("#three").hasClass('o')
    && $("#six").hasClass('o') && $("#nine").hasClass('o')
    || $("#one").hasClass('o') && $("#five").hasClass('o')
    && $("#nine").hasClass('o') || $("#three").hasClass('o')
     && $("#five").hasClass('o') && $("#seven").hasClass('o'))
   {
	 alert('O has won the game. Start a new game');
	 $("#game li").text("+");
	$("#game li").removeClass('disable');
	$("#game li").removeClass('o');
	$("#game li").removeClass('x');
	$("#game li").removeClass('btn-primary');
	$("#game li").removeClass('btn-info');
   }
  else if ($("#one").hasClass('x') && $("#two").hasClass('x')
   && $("#three").hasClass('x') || $("#four").hasClass('x') &&
    $("#five").hasClass('x') && $("#six").hasClass('x') ||
    $("#seven").hasClass('x') && $("#eight").hasClass('x') &&
    $("#nine").hasClass('x') || $("#one").hasClass('x') &&
     $("#four").hasClass('x') && $("#seven").hasClass('x') ||
     $("#two").hasClass('x') && $("#five").hasClass('x') &&
      $("#eight").hasClass('x') || $("#three").hasClass('x') &&
       $("#six").hasClass('x') && $("#nine").hasClass('x') ||
       $("#one").hasClass('x') && $("#five").hasClass('x') &&
       $("#nine").hasClass('x') || $("#three").hasClass('x') &&
       $("#five").hasClass('x') && $("#seven").hasClass('x'))
  {
   alert('X wins has won the game. Start a new game');
   $("#game li").text("+");
	$("#game li").removeClass('disable');
	$("#game li").removeClass('o');
	$("#game li").removeClass('x');
	$("#game li").removeClass('btn-primary');
	$("#game li").removeClass('btn-info')	;
  }
  else if (count == 9)
  {
	alert('Its a tie. It will restart.');
	$("#game li").text("+");
	$("#game li").removeClass('disable');
	$("#game li").removeClass('o');
	$("#game li").removeClass('x');
	$("#game li").removeClass('btn-primary');
	$("#game li").removeClass('btn-info');
	count = 0;
  }
  else if ($(this).hasClass('disable'))
  {
    alert('Already selected');
  }
  else if (count%2 === 0)
  {
	  count++;
	  $(this).text(o);
      $(this).addClass('disable o btn-primary');
	    if ($("#one").hasClass('o') && $("#two").hasClass('o') &&
      $("#three").hasClass('o') || $("#four").hasClass('o') &&
       $("#five").hasClass('o') && $("#six").hasClass('o') ||
       $("#seven").hasClass('o') && $("#eight").hasClass('o') &&
        $("#nine").hasClass('o') || $("#one").hasClass('o') &&
        $("#four").hasClass('o') && $("#seven").hasClass('o') ||
         $("#two").hasClass('o') && $("#five").hasClass('o') &&
         $("#eight").hasClass('o') || $("#three").hasClass('o') &&
          $("#six").hasClass('o') && $("#nine").hasClass('o') ||
          $("#one").hasClass('o') && $("#five").hasClass('o') &&
          $("#nine").hasClass('o') || $("#three").hasClass('o') &&
           $("#five").hasClass('o') && $("#seven").hasClass('o'))
	    {
	   alert('O wins');
	   count = 0;
	   o_win++;
$('#o_win').text(o_win);
        }
  }
   else
  {
	  count++;
    $(this).text(x);
    $(this).addClass('disable x btn-info');
	   if ($("#one").hasClass('x') && $("#two").hasClass('x') &&
     $("#three").hasClass('x') || $("#four").hasClass('x') &&
      $("#five").hasClass('x') && $("#six").hasClass('x') ||
      $("#seven").hasClass('x') && $("#eight").hasClass('x') &&
      $("#nine").hasClass('x') || $("#one").hasClass('x') &&
       $("#four").hasClass('x') && $("#seven").hasClass('x') ||
       $("#two").hasClass('x') && $("#five").hasClass('x') &&
       $("#eight").hasClass('x') || $("#three").hasClass('x') &&
        $("#six").hasClass('x') && $("#nine").hasClass('x') ||
        $("#one").hasClass('x') && $("#five").hasClass('x') &&
        $("#nine").hasClass('x') || $("#three").hasClass('x') &&
        $("#five").hasClass('x') && $("#seven").hasClass('x'))
        {
	 alert('X wins');
	 count = 0;
	 x_win++;
	 $('#x_win').text(x_win);
        }
  }

   });
    $("#reset").click(function () {
    $("#game li").text("+");
	$("#game li").removeClass('disable');
	$("#game li").removeClass('o');
	$("#game li").removeClass('x');
	$("#game li").removeClass('btn-primary');
	$("#game li").removeClass('btn-info');
	count = 0;

  });
});*/
