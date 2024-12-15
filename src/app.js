/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cardInterval;
const randomCard = () => {
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const iconos = ["♦", "♥", "♠", "♣"];
  let valoresRandom = Math.floor(Math.random() * valores.length);
  let iconosRandom = Math.floor(Math.random() * iconos.length);
  let top = document.querySelector("#top");
  let bottom = document.querySelector("#bottom");
  top.textContent = iconos[iconosRandom];
  bottom.textContent = iconos[iconosRandom];
  top.classList.remove(...iconos);
  bottom.classList.remove(...iconos);
  top.classList.add(iconos[iconosRandom]);
  bottom.classList.add(iconos[iconosRandom]);
  document.querySelector("#medium").textContent = valores[valoresRandom];
};
window.onload = function() {
  randomCard();
  let boton = document.querySelector("#boton");
  boton.addEventListener("click", () => randomCard());
};
document.addEventListener("input", () => {
  const widthCard = document.getElementById("widthCard");
  const heightCard = document.getElementById("heightCard");
  let card = document.querySelector(".card");
  widthCard.addEventListener("input", () => {
    card.style.width = `${widthCard.value}px`;
  });

  heightCard.addEventListener("input", () => {
    card.style.height = `${heightCard.value}px`;
  });

  const genAuto = document.querySelector("#genAuto");
});

const buttonGenAuto = document.querySelector("#genAuto");
genAuto.addEventListener("click", timer);

function timer() {
  if (!cardInterval) {
    cardInterval = setInterval(randomCard, 1000);
  }
}

buttonGenAuto.addEventListener("click", timer);

const stopGen = document.querySelector("#stopGen");

function stopGenerate() {
  if (cardInterval) {
    cardInterval = clearInterval(cardInterval);
    cardInterval = null;
  }
}
stopGen.addEventListener("click", stopGenerate);
