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
        var win = document.querySelector("#winner");
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
        if (one.textContent === "O" && two.textContent === "O" && three.textContent === "O"||
        four.textContent === "O" && five.textContent === "O" && six.textContent === "O"||
        seven.textContent === "O" && eight.textContent === "O" && nine.textContent === "O"||
        three.textContent === "O" && five.textContent === "O" && seven.textContent === "O"||
        one.textContent === "O" && five.textContent === "O" && nine.textContent === "O"||
        one.textContent === "O" && four.textContent === "O" && seven.textContent === "O"||
        two.textContent === "O" && five.textContent === "O" && eight.textContent === "O"||
        three.textContent === "O" && six.textContent === "O" && nine.textContent === "O"){

          win.innerHTML = "The winner is number 1";
          console.log("Ganooooo 1");
          
        }else if(one.textContent === "X" && two.textContent === "X" && three.textContent === "X" ||
        four.textContent === "X" && five.textContent === "X" && six.textContent === "X" ||
        seven.textContent === "X" && eight.textContent === "X" && nine.textContent === "X" ||
        three.textContent === "X" && five.textContent === "X" && seven.textContent === "X" ||
        one.textContent === "X" && five.textContent === "X" && nine.textContent === "X" ||
        one.textContent === "X" && four.textContent === "X" && seven.textContent === "X" ||
        two.textContent === "X" && five.textContent === "X" && eight.textContent === "X" ||
        three.textContent === "X" && six.textContent === "X" && nine.textContent === "X"){
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
