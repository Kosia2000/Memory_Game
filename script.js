cards = document.querySelectorAll(".card");
audio = document.querySelector("audio");
shuffleCards();

click = 0;
previousCard = null;

cards.forEach(card => { 
	card.addEventListener("click", flip)
});

function flip(){
  click = click + 1;

  this.classList.toggle("flip");

  toggleImage(this);
  
  if(click % 2 == 1){
    previousCard = this;
    return;
  }

  if(this != previousCard && isMatch(this, previousCard)){
  	this.removeEventListener("click", flip);
  	previousCard.removeEventListener("click", flip);

  	audio.play();
    alert("¡No es posible!");
    return;
  }

  unflipCards(this, previousCard);
}

function isMatch(firstCard, secondCard){
  img1 = firstCard.querySelector(".back").src;
  img2 = secondCard.querySelector(".back").src;

  return img1 == img2;
}

function toggleImage(card)
{
  card.querySelector(".front").classList.toggle("hide");
  card.querySelector(".back").classList.toggle("show");
}

function unflipCards(firstCard, secondCard){
	setTimeout(() => {
		// remove class flip 
		firstCard.classList.remove("flip");
		secondCard.classList.remove("flip");

		// toggleImage
		toggleImage(firstCard);
		toggleImage(secondCard);
	}, 1000);
}

function shuffleCards() {
	cardsContainer = document.querySelector(".cards");

	cards.forEach(card => {
		index = Math.floor(Math.random() * 12);
		card.style.order = index;
	});
}
