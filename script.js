
var getNumba = function(start,range){
    var getRandom = Math.floor(((Math.random()*range) +start));
    while(getRandom>range){
        var getRandom = Math.floor(((Math.random()*range) +start));
    }
    return getRandom;
}



var RPS = ["Rock","Paper","Scissors"]

var ComputerSelection = RPS[getNumba(0,3)];
var PlayerSelection = prompt();
console.log(ComputerSelection);

if (PlayerSelection===ComputerSelection) {
    alert("draw");

}

else if (PlayerSelection=="Rock" && ComputerSelection=="Paper")
 {
     alert("lose");
 }

 else if(PlayerSelection="Rock" && ComputerSelection=="Scissors")

{
    alert("won");
}
else if(PlayerSelection="Scissors" && ComputerSelection=="Rock")

{
    alert("lose");
}
else if(PlayerSelection="Scissors" && ComputerSelection=="Paper")

{
    alert("you won");
}




else if(PlayerSelection="Paper" && ComputerSelection=="Rock")

{
    alert("you won");
}

else if(PlayerSelection="Paper" && ComputerSelection=="Scissors")

{
    alert("you lose");
};


