
const container = document.querySelector("#container");


document.getElementById('container').innerHTML='Párrafo de texto';

const p = document.createElement("p");
p.textContent = "¡Oye, soy rojo!";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "¡Soy un h3 azul!";
h3.style.color = "blue";
container.appendChild(h3);

const div = document.createElement("div");
div.classList.add("content");
div.textContent = "lo de abajo esta insertado en un div creado por javascript";



container.appendChild(div);
const h1 = document.createElement("h1");
h1.textContent = "estoy en un div";

div.appendChild(h1);

const p1 = document.createElement("p");
p1.textContent = "¡YO TAMBIÉN!";
div.appendChild(p1);