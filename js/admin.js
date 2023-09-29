/*
    ?DEFINO PROPIEDADES DE MI OBJETO
     - titulo
     - descripcion
     - imagen
     - precio
     - fechaCreacion
     - categoria
     - id (automatico)
*/

const consolas = [
    {
        id: 'eec389d2-3d56-4b74-ae13-5d387a592048',
        descripcion: 'Consola de hogar con gráficos en alta definición.',
        titulo: 'PlayStation 5',
        fechaDeCreacion: '2020-11-12',
        precio: 499.99,
        imagen: 'https://stylewatch.vtexassets.com/arquivos/ids/233580-800-800?v=638188815205330000&width=800&height=800&aspect=true',
        categoria: 'Consola de Hogar'
    },
    {
        id: 'fc3025ec-f314-4b63-9765-1e8df3ee358a',
        descripcion: 'Consola portátil con pantalla táctil.',
        titulo: 'Nintendo Switch',
        fechaDeCreacion: '2017-03-03',
        precio: 299.99,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_625423-MLA47920375564_102021-O.webp',
        categoria: 'Consola Portátil'
    },
    {
        id: '2e897bad-d4e4-413d-a515-ed95df9ad917',
        descripcion: 'Consola de hogar con alta potencia y compatibilidad hacia atrás.',
        titulo: 'Xbox Series X',
        fechaDeCreacion: '2020-11-10',
        precio: 499.99,
        imagen: 'https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png',
        categoria: 'Consola de Hogar'
    },
    {
        id: '5f49fab9-3135-4676-a160-5c3fdbb1ae92',
        descripcion: 'Consola clásica miniaturizada con juegos preinstalados.',
        titulo: 'NES Classic Edition',
        fechaDeCreacion: '2016-11-10',
        precio: 59.99,
        imagen: 'https://m.media-amazon.com/images/I/81s7B+Als-L._SL1500_.jpg',
        categoria: 'Consola Retro'
    }
];

const formularioProductoHTML = document.getElementById('formularioProducto')
const inputFiltrarHTML = document.getElementById('filtrar')

// !LISTENER EVENTO FORMULARIO

formularioProductoHTML.addEventListener('submit', (eventoEjecutado) => {
    //formularioProductoHTML.elements.titulo.value

    eventoEjecutado.preventDefault()

    const el = formularioProductoHTML.elements

    const nuevoProducto = {
        titulo: el.titulo.value,
        precio: el.precio.valueAsNumber,
        categoria: el.categoria.value,
        imagen: el.imagen.value,
        descripcion: el.descripcion.value,
        fechaDeCreacion: obtenerFecha()
    }

    consolas.push(nuevoProducto)
    pintarProductos()
    formularioProductoHTML.reset()
    el.titulo.focus()
})

function obtenerFecha() {
    const fecha = new Date()
    let mes = fecha.getMonth() + 1
    if(mes < 10) mes = '0' + mes
    const year = fecha.getFullYear()
    let dia = fecha.getDate()
    if(dia < 10) dia = '0' + dia
    const fechaFormateada = `${year}-${mes}-${dia}`

    return fechaFormateada
}

const tableBodyHTML = document.querySelector('#table-body')

function pintarProductos() {

    tableBodyHTML.innerHTML = ''

    consolas.forEach(function (consola, index) {

        tableBodyHTML.innerHTML +=
            `<tr>
                <td class="table-image">
                    <img src="${consola.imagen}"
                    alt="${consola.titulo}">
                </td>
                <td class="table-title">${consola.titulo}</td>
                <td class="table-description">${consola.descripcion}</td>
                <td class="table-price">${consola.precio}</td>
                <td class="table-category">${consola.categoria}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="borrarProducto(${index})"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>`

    })
}

pintarProductos()

function borrarProducto(indiceRecibido) {

    consolas.splice(indiceRecibido, 1)
    pintarProductos()

}

inputFiltrarHTML.addEventListener('keyup', (evt) => {

    console.log(evt.target.value)

})






/*
    1- Deberiamos obtener el body de mi elemnto HTML tbody
    2- Deberiamos por cada consola que tenga en mi array consolas, deberia pintar un <tr>
*/


/*<tr>
<td class="table-image">
    <img src="https://stylewatch.vtexassets.com/arquivos/ids/233580-800-800?v=638188815205330000&width=800&height=800&aspect=true"
        alt="Play Station 5">
</td>
<td class="table-title">Play Station 5</td>
<td class="table-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, at.</td>
<td class="table-price">$499.99</td>
<td class="table-category">Consolas</td>
</tr> */