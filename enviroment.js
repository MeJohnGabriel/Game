"use strict";

const buttonElement = document.getElementById("btn");
const resultElement = document.getElementById("res");
const btnReloadElement = document.getElementById("btnReload");
const objectsArray = [
  "Elephant",
  "Penguin",
  "Kangaroo",
  "Snake",
  "Parrot",
  "Shark",
  "Ant",
  "Platypus",
  "Man",
  "Pencil",
  "Backpack",
  "Phone",
  "Oven",
  "Lipstick",
  "Shoes",
  "Spider-Man",
  "Dominic Toretto (Fast and Furious)",
  "Pikachu",
  "Captain America",
  "Peter Pan",
  "Barbie",
  "Darth Vader",
  "The Minions",
  "Eiffel Tower",
  "Statue of Liberty",
  "Times Square",
  "The Pyramids of Egypt",
  "Christ the Redeemer",
  "The Great Wall of China",
  "A cat that only speaks French",
  "A sandwich that screams when you bite it",
  "A toothbrush that tells bad jokes",
  "A cookie that begs you not to eat it",
  "A teddy bear that acts like a grumpy old man",
];

buttonElement.addEventListener("click", function () {
  const mathRandom = Math.trunc(Math.random() * objectsArray.length);
  resultElement.textContent = objectsArray[mathRandom];

  if (mathRandom >= 29 && mathRandom <= 33) {
    resultElement.style.color = "#FFCD28";
    resultElement.style.backgroundColor = "black";
  } else {
    resultElement.style.color = "white";
    resultElement.style.backgroundColor = "orange";
  }

  console.log(resultElement.textContent);
});

btnReloadElement.addEventListener("click", function () {
  location.reload();
});
