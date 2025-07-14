var turn = "X";
var gameOver = false;

function changeTurn (){
    return turn === "X"?"O" : "X"
}
var boxs = document.querySelectorAll(".gridBox");
function cheakWin() {

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((boxs[e[0]].innerHTML === boxs[e[1]].innerHTML) && (boxs[e[0]].innerHTML === boxs[e[2]].innerHTML) && (boxs[e[0]].innerHTML !== "")){
            document.getElementsByClassName('Player')[0].innerHTML = boxs[e[0]].innerHTML + " Won";
            gameOver = true;
        }
    });
}


var length = document.querySelectorAll(".gridBox").length;
for(i=0;i < length;i++){
 document.querySelectorAll(".gridBox")[i].addEventListener('click',function(){
    var inbox = this.innerHTML
    if(inbox === ''){
        this.innerHTML = turn;
        turn = changeTurn();
        cheakWin();
        if(!gameOver){document.getElementsByClassName('Player')[0].innerHTML = "Turn For " + turn;}
        
    }
}
 );   
}

document.getElementById("button").addEventListener("click", function () {
     boxs.forEach(box => {
        box.innerHTML = "";
        box.style.pointerEvents = "auto";//enable clicks again
     });
     turn = "X";
     document.getElementsByClassName('Player')[0].innerHTML = "Turn For X";

});
 