/*
The purpose of this project was to use newly learned Javascript principles
by creating a functional website. This was a simple project that produced
random integers, used those to display random images on the website, and
and if statement to evaluate different conditions.
*/

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.getElementsByClassName('img1')[0];
var img2 = document.getElementsByClassName('img2')[0];

img1.setAttribute('src', `./images/dice${(randomNumber1).toString()}.png`);
img2.setAttribute('src', `./images/dice${(randomNumber2).toString()}.png`);

var heading = document.getElementsByTagName('h1')[0];
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🏆Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins!🏆"
} else {
    heading.innerHTML = "Draw!"
}
