var numberOfAlphabets = document.querySelectorAll(".alpha").length;
for (var i = 0; i < numberOfAlphabets; i++) {
document.querySelectorAll(".alpha")[i].addEventListener("click", function() {
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

});

}

document.addEventListener("keypress", function(event) {

makeSound(event.key);

buttonAnimation(event.key);});
document.addEventListener("onclick", function(event) {

makeSound(event.key);

buttonAnimation(event.key);
});

function makeSound(key) {

switch (key) {

case "Aa":
case "a":
var kick = new Audio("voice/Aspeech.mp3");
kick.play();
break;
case "Bb":
case "b":
var kick = new Audio('voice/Bspeech.mp3');
kick.play();
break;

case "Cc":
case "c":
var tom4 = new Audio('voice/Cspeech.mp3');
tom4.play();
break;

case "Dd":
case "d":
var kick = new Audio('voice/Dspeech.mp3');
kick.play();
break;

case "Ee":
case "e":
var kick = new Audio('voice/Espeech.mp3');
kick.play();
break;

case "Ff":
case "f":
var kick = new Audio('voice/fspeech.mp3');
kick.play();
break;
case "Gg":
case "g":
var kick = new Audio('voice/gspeech.mp3');
kick.play();
break;
case "Hh":
case "h":
var kick = new Audio('voice/hspeech.mp3');
kick.play();
break;
case "Ii":
case "i":
var kick = new Audio('voice/ispeech.mp3');
kick.play();
break;
case "Jj":
case "j":
var kick = new Audio('voice/jspeech.mp3');
kick.play();
break;
case "Kk":
case "k":
var kick = new Audio('voice/kspeech.mp3');
kick.play();
break;
case "Ll":
case "l":
var kick = new Audio('voice/lspeech.mp3');
kick.play();
break;
case "Mm":
case "m":
var kick = new Audio('voice/mspeech.mp3');
kick.play();
break;
case "Nn":
case "n":
var kick = new Audio('voice/nspeech.mp3');
kick.play();
break;
case "Oo":
case "o":
var kick = new Audio('voice/ospeech.mp3');
kick.play();
break;

case "Pp":
case "p":
var kick = new Audio('voice/pspeech.mp3');
kick.play();
break;
case "Qq":
case "q":
var kick = new Audio('voice/qspeech.mp3');
kick.play();
break;
case "Rr":
case "r":
var kick = new Audio('voice/rspeech.mp3');
kick.play();
break;
case "Ss":
case "s":
var kick = new Audio('voice/sspeech.mp3');
kick.play();
break;
case "Tt":
case "t":
var kick = new Audio('voice/tspeech.mp3');
kick.play();
break;
case "Uu":
case "u":
var kick = new Audio('voice/uspeech.mp3');
kick.play();
break;
case "Vv":
case "v":
var kick = new Audio('voice/vspeech.mp3');
kick.play();
break;
case "Ww":
case "w":
var kick = new Audio('voice/wspeech.mp3');
kick.play();
break;
case "Xx":
case "x":
var kick = new Audio('voice/xspeech.mp3');
kick.play();
break;
case "Yy":
case "y":
var kick = new Audio('voice/yspeech.mp3');
kick.play();
break;
case "Zz":
case "z":
var kick = new Audio('voice/zspeech.mp3');
kick.play();
break;

default: console.log(key);

}
}

function buttonAnimation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
setTimeout(function() {
activeButton.classList.remove("pressed");
}, 10);

}


