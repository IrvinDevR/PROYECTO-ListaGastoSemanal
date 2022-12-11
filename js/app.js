/* A simple budget app that allows you to add expenses and calculate the remaining budget. */
// lISTA DE GASTOS SEMANALES

const form = document.getElementById("agregar-gasto");
const nombreGasto = document.getElementById("gasto");
const cantidad = document.getElementById("cantidad");

// Botones
const agregar = document.getElementById("submit");
const reset = document.getElementById("reset");

// Aquí se mostrarán los valores
const restante = document.getElementById("restante");
const listaGastos = document.getElementById("list-group");
const tituloGastos = document.getElementById("tituloGastos");
const total = document.getElementById("total");

// Agregando presupuesto
const presuContainer = document.getElementById("presu-container");
const presuInput = document.getElementById("presu");
const btnPresu = document.getElementById("btnPresu");
const presupuesto = document.getElementById("presupuesto");

let cantidadInicial = 0;
btnPresu.addEventListener("click", () => {
  presupuesto.innerHTML = `${presuInput.value}`;
  presuContainer.style.display = "none";

  cantidadInicial = parseInt(presupuesto.textContent);

  if (presuInput.value) {
    nombreGasto.removeAttribute("disabled");
    cantidad.removeAttribute("disabled");
    agregar.removeAttribute("disabled");
    btnPresu.setAttribute("disabled", "");
  }
});

// Agregando gastos
let titleGastos = 0;
let gastoTotal = 0;

agregar.addEventListener("click", (e) => {
  e.preventDefault();
  if (titleGastos == 0) {
    tituloGastos.innerHTML = `<tr>
                                <th>Gasto</th>
                                <th>Precio</th>
                              </tr>`;
    titleGastos = 1;
  }

  let elemento = `<tr>
                    <td>${nombreGasto.value}</td>
                    <td>${cantidad.value}</td>
                  </tr>`;
  listaGastos.insertAdjacentHTML("beforeend", elemento);

  // Calculando restante
  cantidadInicial -= parseInt(cantidad.value);
  restante.innerHTML = `${cantidadInicial}`;

  //calculo Gasto Total
  gastoTotal += parseInt(cantidad.value);
  total.innerHTML = `${gastoTotal}`;

  // Reseteando Inputs
  nombreGasto.value = "";
  cantidad.value = "";
  nombreGasto.focus();
});

// Borrar Todo
reset.addEventListener("click", () => {
  listaGastos.innerHTML = "";
  restante.innerHTML = "";
  tituloGastos.innerHTML = "";
  total.innerHTML = "";
  presuContainer.style.display = "";
  presupuesto.innerHTML = "";
  presuInput.value = "";
  presuInput.focus();
  titleGastos = 0;
  cantidadPresupuesto = 0;
  nombreGasto.setAttribute("disabled", "");
  cantidad.setAttribute("disabled", "");
  agregar.setAttribute("disabled", "");
  btnPresu.removeAttribute("disabled");
});
