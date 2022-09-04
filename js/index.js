/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable radix */
/* eslint-disable no-alert */
let numero = 0; let limite = 0; let n = 1; let rep = 0;

let confUno = ''; let
  confDos = '';

do {
  // eslint-disable-next-line no-alert
  numero = parseInt(prompt('Ingrese el numero a ser multiplicado'), 10);

  alert(`El número ingresado es ${numero}`);

  confUno = prompt('Ingrese NO para rectificar. Sino deje en blanco para confirmar');
} while (confUno = '');

alert('El numero ha sido confirmado.');

do {
  limite = parseInt(prompt('Ingrese el limite.'));

  alert(`El limite es ${limite}`);

  confDos = prompt('Ingrese NO para rectificar. Sino deje en blanco');
} while (confDos = '');

alert('El limite ha sido confirmado.');

if (numero > limite) {
  alert(`EL numero ${numero} es mayor que el limite.
    
    Se saldra del programa`);
} else {
  rep = numero;

  while (rep < limite) {
    rep += numero;
    n += 1;
  }
}

alert(`El numero entra ${n} veces dentro del limite`);
