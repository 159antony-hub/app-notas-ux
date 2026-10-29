
const formulario = document.getElementById("formulario");
const campoNota = document.getElementById("nota");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");
const vacio = document.getElementById("vacio");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
}

function actualizarLista() {
  vacio.hidden = lista.children.length > 0;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = campoNota.value.trim();

  if (texto === "") {
    mostrarMensaje("Escribe una nota antes de agregarla.", "error");
    campoNota.focus();
    return;
  }

  const elemento = document.createElement("li");
  const contenido = document.createElement("span");
  const botonEliminar = document.createElement("button");

  contenido.textContent = texto;
  botonEliminar.textContent = "Eliminar";
  botonEliminar.type = "button";
  botonEliminar.className = "eliminar";
  botonEliminar.setAttribute(
    "aria-label",
    "Eliminar nota: " + texto
  );

  botonEliminar.addEventListener("click", function () {
    const confirmar = confirm(
      "¿Seguro que quieres eliminar esta nota?"
    );

    if (!confirmar) {
      mostrarMensaje("Eliminación cancelada.", "info");
      return;
    }

    elemento.remove();
    actualizarLista();
    mostrarMensaje("Nota eliminada.", "exito");
    campoNota.focus();
  });

  elemento.append(contenido, botonEliminar);
  lista.appendChild(elemento);

  campoNota.value = "";
  actualizarLista();

  mostrarMensaje("Nota agregada correctamente.", "exito");
  campoNota.focus();
});

actualizarLista();
