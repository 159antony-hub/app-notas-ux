
const nota = document.getElementById("nota");
const lista = document.getElementById("lista");

document.getElementById("agregar").onclick = function () {
  if (nota.value.trim() !== "") {
    const elemento = document.createElement("li");
    elemento.textContent = nota.value;
    lista.appendChild(elemento);
    nota.value = "";
  }
};
