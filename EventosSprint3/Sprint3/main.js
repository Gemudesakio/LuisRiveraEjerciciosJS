let idGlobal = 4;
const tareas = [
    {
        id: 0,
        titulo: 'Sacar la basura',
        texto: 'mi mama me va a juetiar si no lo hago',
        realizada: false 
    },
    {
        id: 1,
        titulo: 'terminar sprint 3',
        texto: 'realizar las aplicaciones pertinentes del sprint 3',
        realizada: false
    },
    {
        id: 2,
        titulo: 'matricular materias en la universidad',
        texto: 'matricular las materias del siguiente semestre',
        realizada: true
    },
    {
        id: 3,
        titulo: 'realizar trabajo de grado',
        texto: 'adelantar anteproyecto del trabajo final de grado',
        realizada: false
    },
    {
        id: 4,
        titulo: 'realizar trabajo de grado',
        texto: 'adelantar anteproyecto del trabajo final de grado',
        realizada: false
    },
];

//variables
let contenedor = document.getElementById('contenedorTarjetas')
let guardar = document.getElementById('guardar')
let filtro = document.getElementById('flexSwitchCheckDefault')
let textSearch = document.getElementById('textSearch')
let btnborrar = document.getElementById('borrarMain')

tareas.forEach(tarea => {
    crearTarjeta(tarea)
});

filtro.addEventListener('change', aplicarFiltros);
textSearch.addEventListener('input', aplicarFiltros);

guardar.addEventListener('click', () => {
    let titulo = document.getElementById('titulo').value;
    let contenido = document.getElementById('textArea').value;
    crearTarea(titulo, contenido);
    document.getElementById('titulo').value = ''
    document.getElementById('textArea').value = ''
    
});

btnborrar.addEventListener('click', () => {
    document.getElementById('titulo').value = '';
    document.getElementById('textArea').value = '';
});

//funciones y procedimientos 
function crearTarjeta(tarea) {
    let tarjeta = document.createElement('div')
    tarjeta.classList.add('card', 'm-3')
    tarjeta.innerHTML = `
      <div class="card-body d-flex flex-column">
        <label class="card-title fw-bold">
          <input type="checkbox" id="checkCard" name="checkCard" class="mb-3">
          ${tarea.titulo}
        </label>
        <p class="card-text">${tarea.texto}</p>
        <button class="btn btn-danger align-self-center w-75" data-id="${tarea.id}">Borrar Nota</button>
      </div>
    `;

    tarjeta.querySelector('.btn-danger').addEventListener('click', (evento) => {
        borrarTarea(evento, tarea.id)
     
    });
    let descripcion = tarjeta.querySelector('.card-text')
    tarjeta.querySelector('#checkCard').addEventListener('click', () => {
        descripcion.classList.toggle('tachado')
        tarea.realizada = !tarea.realizada
       
    });
    contenedor.appendChild(tarjeta)
}

function crearTarea(titulo, contenido) {
    let nuevaTarea = {
        id: idGlobal++,
        titulo: titulo,
        texto: contenido,
        realizada: false
    };
    tareas.push(nuevaTarea)
    crearTarjeta(nuevaTarea)
}

function borrarTarea(evento, id) {
    let indice = tareas.findIndex(tarea => tarea.id === id)
    if (indice > -1) {
        tareas.splice(indice, 1)
        evento.target.closest('.card').remove()
    }
}

function aplicarFiltros() {
    let texto = textSearch.value.toLowerCase()
    let mostrarRealizadas = filtro.checked;

    let tarjetas = contenedor.querySelectorAll('.card');
    tarjetas.forEach(tarjeta => {
        let descripcion = tarjeta.querySelector('.card-text').innerText.toLowerCase();
        let tachado = tarjeta.querySelector('.card-text').classList.contains('tachado');
        
        let cumpleBusqueda = descripcion.includes(texto)
        let cumpleFiltro = !mostrarRealizadas || tachado

        tarjeta.classList.toggle('filtro', !(cumpleBusqueda && cumpleFiltro))
    });
}
