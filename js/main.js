import { tiposDeCambio } from "./data.js";

/**
 * Función para convertir ARS a USD según el tipo de cambio.
 * @param {number} cantidad - La cantidad de ARS a convertir.
 * @param {string} tipoDeCambio - El tipo de cambio a utilizar.
 * @returns {string|number} - El resultado de la conversión o un mensaje de error.
 */
function convertirARS(cantidad, tipoDeCambio) {
  const cambio = tiposDeCambio.find(cambio => cambio.tipo === tipoDeCambio);
  if (cambio) {
    const resultado = cantidad / cambio.valor;
    return resultado.toFixed(2);
  } else {
    return 'Tipo de cambio no válido';
  }
}

/**
 * Función para convertir USD a ARS según el tipo de cambio.
 * @param {number} cantidad - La cantidad de USD a convertir.
 * @param {string} tipoDeCambio - El tipo de cambio a utilizar.
 * @returns {string|number} - El resultado de la conversión o un mensaje de error.
 */
function convertirUSD(cantidad, tipoDeCambio) {
  const cambio = tiposDeCambio.find(cambio => cambio.tipo === tipoDeCambio);
  if (cambio) {
    const resultado = cantidad * cambio.valor;
    return resultado.toFixed(2);
  } else {
    return 'Tipo de cambio no válido';
  }
}

// Función para iniciar el conversor
function iniciarConversor() {
  const nombreUsuarioInput = document.getElementById('nombreUsuario');
  const confirmarNombreBtn = document.getElementById('confirmarNombre');
  const tipoDeCambioSelect = document.getElementById('tipoDeCambio');
  const cantidadARSInput = document.getElementById('cantidadARS');
  const convertirARSBtn = document.getElementById('convertirARS');
  const resultadoARSP = document.getElementById('resultadoARS');
  const tipoDeCambioInversoSelect = document.getElementById('tipoDeCambioInverso');
  const cantidadUSDInput = document.getElementById('cantidadUSD');
  const convertirUSDBtn = document.getElementById('convertirUSD');
  const resultadoUSDP = document.getElementById('resultadoUSD');

  let nombreUsuario = '';

  confirmarNombreBtn.addEventListener('click', () => {
    nombreUsuario = nombreUsuarioInput.value;
    if (nombreUsuario === "") {
      alert("Tenés que poner un nombre de usuario para continuar.");
    } else {
      alert("El nombre de usuario ingresado es: " + nombreUsuario);
    }
  });

  convertirARSBtn.addEventListener('click', () => {
    const tipoDeCambio = tipoDeCambioSelect.value;
    const cantidadARS = parseFloat(cantidadARSInput.value);
    const resultado = convertirARS(cantidadARS, tipoDeCambio);
    resultadoARSP.innerText = `${cantidadARS} ARS son equivalentes a ${resultado} USD según el tipo de cambio ${tipoDeCambio} al día de hoy.`;
  });

  convertirUSDBtn.addEventListener('click', () => {
    const tipoDeCambio = tipoDeCambioInversoSelect.value;
    const cantidadUSD = parseFloat(cantidadUSDInput.value);
    const resultado = convertirUSD(cantidadUSD, tipoDeCambio);
    resultadoUSDP.innerText = `${cantidadUSD} USD son equivalentes a ${resultado} ARS según el tipo de cambio ${tipoDeCambio} al día de hoy.`;
  });
}

// Iniciar el conversor cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', iniciarConversor);
