image_array = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

function myImages() {
  random_index = Math.floor(Math.random() * image_array.length);
  selected_image = image_array[random_index];
  document.querySelector("img.img1").src = selected_image;
}

function myImages2() {
  random_index2 = Math.floor(Math.random() * image_array.length);
  selected_image = image_array[random_index2];
  document.querySelector("img.img2").src = selected_image;
}
function result() {
  let greeting;
  if (random_index < random_index2) {
    greeting = "Player 2 Wins";
  } else if (random_index2 < random_index) {
    greeting = "Player 1 Wins";
  } else {
    greeting = "Tie";
  }

  document.querySelector("h1").innerHTML = greeting;
}
