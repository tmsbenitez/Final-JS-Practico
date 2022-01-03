// Helpers

const ms = document.getElementById('ms');
const msdiez = document.getElementById('msdiez');
const btn_Calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')
let selection = '';

function esPar(n) {
    return (n % 2 === 0);
}

list = [];

function cleanError (id) {
  const errors = document.getElementById(id).querySelectorAll('.error');
  for (e of errors) {
      e.innerHTML = '';
  }
}

function renderList (list) {
  l = document.getElementById('list-values');
  l.innerHTML = '';

  list.forEach((element, index) => {
    const listElement = document.createElement('li');
    listElement.innerHTML = `<strong>${index + 1} -</strong> ${element}`;

    l.appendChild(listElement);
  });
}

function addListNumber() {
  cleanError('form');
  const element = document.getElementById('addValue');
  const value = parseInt(element.value);
  element.value = '';

  if (Number.isNaN(value) || value < 0) {
      e = document.getElementById('errorAddValue');
      e.innerHTML = 'Ingrese un valor válido';
      return false;
  }
  
  list.push(value);
  renderList(list);
}

function removeListNumber() {
  cleanError('form');
  const element = document.getElementById('removeValue');
  let value = parseInt(element.value);
  element.value = '';

  if (Number.isNaN(value) || value <= 0) {
      e = document.getElementById('errorRemoveValue');
      e.innerHTML = 'Ingrese una posición válida';
      return false;
  }

  value -= 1;

  list.splice(value, 1);
  renderList(list);
}

const buttons = [
  { name: 'ms', value: ms },
  { name: 'msdiez', value: msdiez },
]

function active(btn) {
  buttons.forEach((element) => {
    element.value === btn
      ? element.value.classList.add('active')
      : element.value.classList.remove('active')
  })
}


// Calculadora de medianas
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
         return valorAcumulado + nuevoElemento;
      }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
  
}

// Mediana General
function medianaSalarios (lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
      const personMitad1 = lista[mitad-1];
      const personMitad2 = lista[mitad];

      return mediana = calcularMediaAritmetica([personMitad1, personMitad2])
  } else {
      const personMitad = lista[mitad];
      return personMitad;
  }
}

ms.addEventListener('click', (ev) => {
  const option = ev.target.dataset.option;
  selection = option
  active(ms)
})


// const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana Top 10%
function spliceList(list) {
  const spliceStart = parseInt((list.length * 90) / 100);
  const spliceCount = parseInt(list.length - spliceStart);
  const listTop10 = list.splice(spliceStart, spliceCount);

  return listTop10;
}

msdiez.addEventListener('click', (ev) => {
  const option = ev.target.dataset.option;
  selection = option
  active(msdiez)
})

// CALCULOS

function calcular(opc) {
const listSorted = list.sort((salaryA, salaryB) => salaryA - salaryB);
  if (opc === 'ms') {
    let result = medianaSalarios(listSorted)
    resultado.innerText = `RESULTADO: ${result}`
  }
  else if (opc === 'msdiez') {
    let result = medianaSalarios(spliceList(listSorted))
    resultado.innerText = `RESULTADO: ${result}`
  }
}

btn_Calcular.addEventListener('click', () => {
  let opcion = buttons.find((e) => e.name === selection)
  if (opcion) {
    calcular(opcion.name)
  }
  else {
    const result = "Seleccione una opcion";
    resultado.innerText = `RESULTADO: ${result}`
  }
})