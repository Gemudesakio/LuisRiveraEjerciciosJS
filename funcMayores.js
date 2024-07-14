//duplicar cada nnumero en un array
const numeros = [1,2,3,4,5]
 
let numerosMAP = numeros.map(a=> a*2)
console.log(numerosMAP);

//convertir un array de cadenas a mayusculas

const palabras = ['hola', 'mundo', 'javaScript']

const PalabrasMAYUS = palabras.map(b=> b.toUpperCase())
console.log(PalabrasMAYUS);

//extraer las edades de un array 

const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Carlos', edad: 40 }
    ];

const peronasNombres = personas.map(c=> c.edad)
console.log(peronasNombres);

//Crear un nuevo array combinando dos arrays existentes:

const numeros4 = [1, 2, 3];
const letras = ['a', 'b', 'c'];

let nuevoArray = numeros4.map((num,index)=> num+letras[index])
console.log(nuevoArray);

//. Aplicar una función de transformación compleja a un array de objetos:

const productos = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalón', precio: 30 },
    { nombre: 'Zapatos', precio: 50 }
    ];

    let aplicarDescuento = (producto) => {
        const descuento = 0.10
        let precioDescuent = producto.precio * (1- descuento)

        return {
            producto, precioConDescuento: precioDescuent.toFixed(2)
        }

    }
    let ProductosDescuento = productos.map(aplicarDescuento)
    console.log(ProductosDescuento);

//     1. Entrega un arreglo de los nombres que contengan la letra “a” y ordena ese arreglo
// alfabéticamente.

let nombres = ['Ana', 'Carlos', 'David', 'Elena', 'Beto']

let nombresA = nombres.filter(nombreA => nombreA.toLocaleLowerCase().includes('a'))
console.log(nombresA);

nombresA.sort((a,b)=> b.localeCompare(a)) 
console.log(nombresA);

// 2. Entrega un arreglo de los libros con más de 300 páginas. El arreglo debe estar organizado de
// forma descendente según el número de páginas.

let libros = [{ titulo: 'Harry Potter', paginas: 400 }, { titulo: 'El Hobbit', paginas: 300 }, { titulo: 'Cienaños de soledad', paginas: 500 }]
let limos300 = libros.filter(libro300 => libro300.paginas > 300)
console.log(limos300);
limos300.sort((c,d)=> d.paginas - c.paginas)
console.log(limos300);


// 3. Entrega un arreglo de los productos que estén disponibles, con sus precios a un 30% de
// descuento y organizados de forma alfabética DESCENDENTE.


let productos3 = [{ nombre: 'Camisa', precio: 20, disponible: true }, { nombre: 'Pantalón', precio: 30,
disponible: false }, { nombre: 'Zapatos', precio: 50, disponible: true }]

let productosDisp = productos3.filter(proDisp => proDisp.disponible == true )
console.log(productosDisp);


let descuento = (productoo) => {
    let descuentoo = 0.3
    let precioDescuento  = productoo.precio - (1-descuentoo)

    return {
    nombre: productoo.nombre,
    precio: precioDescuento,
    disponible: productoo.disponible
    }

}
let productosDisp30 =  productosDisp.map(descuento)
console.log(productosDisp30);

productosDisp30.sort((x, y) => y.nombre.localeCompare(x.nombre));
console.log(productosDisp30);