const h1 = document.querySelector('h1'); //Seleccionar por el nombre de la etiqueta
const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');

const pResult = document.getElementById('result');

const btn = document.getElementById('btnCalcular');

// form.addEventListener('submit', submitValues);

// function submitValues(event){
//     //console.log({event});
//     event.preventDefault();
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerHTML = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', submitValues);

function submitValues(){
    //console.log({event});
    //event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerHTML = "Resultado: " + sumaInputs;
}

