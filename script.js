let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
function newTitle() {
  document.getElementById('main-title').innerText = 'Toretto.';
}
newTitle();

  // Part 2
this.body.style.backgroundColor = "#2F4F4F"

  // Part 3
document.getElementById("favorite-things").children[5].remove();

  // Part 4
function makeTitleBigger() {
  let specialItems = document.getElementsByClassName('special-title');
  for (let i = 0; i < specialItems.length; i++) {
    specialItems[i].style.fontSize = '2rem';
  }
}
  makeTitleBigger()

  // Part 5
document.getElementById('past-races').children[3].remove();

  // Part 6
function addRace(city) {
  let newLi = (document.createElement('li').innerText = city);
  document.getElementById('past-races').append(newLi);
}
addRace(city);

  // Part 7


  // Part 8


  // Part 9




});
