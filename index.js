// LES SELECTEURS
//document.querySelector("h4").style.background = "yellow";
const baliseHTML = document.querySelector("h4");
//console.log(baliseHTML);
//baliseHTML.style.background = "yellow";

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener("click", () => {
  //questionContainer.style.background = "red";
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// Priorité des classes et balises
/* <div> > #id > .class > baliseHTML */
