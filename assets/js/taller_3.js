// UTILIDADES

const promedio = document.getElementById("promedio");
const mediana = document.getElementById("mediana");
const moda = document.getElementById("moda");
const btn_Calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')
let selection = '';

const buttons = [
  { name: 'promedio', value: promedio },
  { name: 'mediana', value: mediana },
  { name: 'moda', value: moda },
]

function getList() {
  const list = document.getElementById('inputValues').value
  let nums = list.toString().split(",").map((value) => parseInt(value));
  return nums
}

function active(btn) {
  buttons.forEach((element) => {
    element.value === btn
      ? element.value.classList.add('active')
      : element.value.classList.remove('active')
  })
}

// PROMEDIO

function calcularPromedio(nums) {
    let totalSuma = nums.reduce((acumulador, value) => acumulador + value)
    let promedio = totalSuma / nums.length
    return promedio
}

promedio.addEventListener('click', (ev) => {
    const option = ev.target.dataset.option;
    selection = option
    active(promedio)
  })

// MODA

function calcularModa (nums) {
    const arr = []
    nums.map((a, index) => {
        arr[index] = [a, 0]
        nums.map((b) => {
            a === b
                ? arr [index][1] += 1
                : console.log('');
        })
    })
    return arr.sort((a, b) => a[1] - b[2]).pop()
}

moda.addEventListener('click', (ev) => {
    const option = ev.target.dataset.option;
    selection = option
    active(moda)
  })

// MEDIANA

const esPar = (num) => {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

function calcularMediana (nums) {
    let a = nums[parseInt((nums.length) / 2)]
    let b = nums[parseInt((nums.length) / 2) - 1]

    if (esPar(nums.length)) {
        return calcularPromedio([a, b])
    } else {
        return a
    }
}

mediana.addEventListener('click', (ev) => {
    const option = ev.target.dataset.option;
    selection = option
    active(mediana)
  })

// CALCULOS

function calcular(opc) {
    let nums = getList()
    if (opc === 'promedio') {
      let result = calcularPromedio(nums)
      resultado.innerText = `RESULTADO: ${result.toFixed(2)}`
    }
    else if (opc === 'mediana') {
      let numsInOrder = nums.sort((a, b) => a - b)
      let result = calcularMediana(numsInOrder)
      resultado.innerText = `RESULTADO: ${result.toFixed(2)}`
    }
    else if (opc === 'moda') {
      let result = calcularModa(nums)
      resultado.innerText = `RESULTADO: ${result[0]}`
    }
  }
  
  btn_Calcular.addEventListener('click', () => {
    let opcion = buttons.find((e) => e.name === selection)
    if (opcion) {
      calcular(opcion.name)
    }
    else {
      const result = "Seleccione una opción";
      resultado.innerText = `RESULTADO: ${result}`
    }
  })