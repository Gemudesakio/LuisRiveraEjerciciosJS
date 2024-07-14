let botonIMC = document.getElementById('calcular')
botonIMC.addEventListener('click', () => {
    let estatura = document.getElementById('estatura').value
    let peso = document.getElementById('peso').value
    if (estatura && peso) {
        let estaturaMetros = estatura / 100
        let imc = peso / (estaturaMetros * estaturaMetros)
        document.getElementById('resultado').value = 'Resultado: ' + imc.toFixed(1)
    } else {
        document.getElementById('resultado').value = 'Por favor, complete ambos campos.'
    }
})


let dolaresInput = document.getElementById('dolares')
let colombianoInput = document.getElementById('colombiano')

dolares.addEventListener('keyup', ()=>{
    let dolares = (dolaresInput.value)
   let conversion = dolares*4000
   colombianoInput.value = conversion.toFixed(2)
})

colombiano.addEventListener('keyup', ()=>{
    let colombiano = (colombianoInput.value)
    let conversion = colombiano/4000
    dolaresInput.value= conversion.toFixed(2)
    
})