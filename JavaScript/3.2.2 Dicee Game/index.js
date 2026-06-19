var randomNumber = Math.random()*6;
randomNumber = Math.floor(randomNumber)+1;
console.log(randomNumber);

var randomDiceImage = "dice" + randomNumber + ".png";
randomNumber = "images/" + randomDiceImage;
console.log(randomNumber);

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomNumber);
 
var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;
console.log(randomNumber2);

var randomDiceImage2 = "dice"+ randomNumber2 +".png";
randomNumber2 = "images/" + randomDiceImage2;
console.log(randomNumber2);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomNumber2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw!";
}