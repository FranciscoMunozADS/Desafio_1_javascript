/* Precio Base del producto identificando constante precio y cantidad inicial con funcion*/

document.addEventListener("DOMContentLoaded", function () {
  const precioInicial = 400000;
  let cantidad = 0;

  /* precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio; */

  /* referencias al DOM */
  const cantidadProducto = document.querySelector("#cantidad");
  const valorTotal = document.querySelector("#valor-total");
  const btnAumentar = document.querySelector("#aumentar");
  const btnDisminuir = document.querySelector("#disminuir");

  /* Función para el total*/

  function actualizarTotal() {
    cantidadProducto.innerHTML = cantidad; /* actualiza cantidad en DOM */
    valorTotal.innerHTML =
      precioInicial * cantidad; /* ejecuta el calculo del total a pagar */
  }

  /* eventos para botones */

  /* aumentar (+) */
  btnAumentar.addEventListener("click", () => {
    cantidad++;
    actualizarTotal();
  });

  /* disminuir (-) */
  btnDisminuir.addEventListener('click', () => {
    if (cantidad >0) { 
        cantidad--;
        actualizarTotal();
    }
  })
});
