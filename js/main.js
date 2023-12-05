// PRODUCTOS
const productos = [
    // acusticas
    {
        id: "acustica-01",
        titulo: "Acustica 01",
        imagen: "./img/acustica/01.jpeg",
        categoria: {
            nombre: "Acusticas",
            id: "acustica"
        },
        precio: 1000
    },

    {
        id: "acustica-02",
        titulo: "Acustica 02",
        imagen: "./img/acustica/02.jpeg",
        categoria: {
            nombre: "Acusticas",
            id: "acustica"
        },
        precio: 1000
    },

    {
        id: "acustica-03",
        titulo: "Acustica 03",
        imagen: "./img/acustica/03.jpeg",
        categoria: {
            nombre: "Acusticas",
            id: "acustica"
        },
        precio: 1000
    },

    {
        id: "acustica-04",
        titulo: "Acustica 04",
        imagen: "./img/acustica/04.jpeg",
        categoria: {
            nombre: "Acusticas",
            id: "acustica"
        },
        precio: 1000
    },

    {
        id: "acustica-05",
        titulo: "Acustica 05",
        imagen: "./img/acustica/05.jpeg",
        categoria: {
            nombre: "Acusticas",
            id: "acustica"
        },
        precio: 1000
    },
    {
        id: "acustica-06",
        titulo: "Acustica 06",
        imagen: "./img/acustica/06.jpeg",
        categoria: {
            nombre: "Acusticas",
            id: "acustica"
        },
        precio: 1000
    },
    {
        id: "acustica-07",
        titulo: "Acustica 07",
        imagen: "./img/acustica/07.jpeg",
        categoria: {
            nombre: "Acusticas",
            id: "acustica"
        },
        precio: 1000
    },
    {
        id: "acustica-08",
        titulo: "Acustica 08",
        imagen: "./img/acustica/08.jpeg",
        categoria: {
            nombre: "Acusticas",
            id: "acustica"
        },
        precio: 1000
    },

    {
        id: "electrica-01",
        titulo: "Electrica 01",
        imagen: "./img/electrica/01.jpeg",
        categoria: {
            nombre: "Electricas",
            id: "electrica"
        },
        precio: 2000
    },
    {
        id: "electrica-02",
        titulo: "Electrica 02",
        imagen: "./img/electrica/02.jpeg",
        categoria: {
            nombre: "Electricas",
            id: "electrica"
        },
        precio: 2000
    },
    {
        id: "electrica-03",
        titulo: "Electrica 03",
        imagen: "./img/electrica/03.jpeg",
        categoria: {
            nombre: "Electricas",
            id: "electrica"
        },
        precio: 2000
    },
    {
        id: "electrica-04",
        titulo: "Electrica 04",
        imagen: "./img/electrica/04.jpeg",
        categoria: {
            nombre: "Electricas",
            id: "electrica"
        },
        precio: 2000
    },
    {
        id: "electrica-05",
        titulo: "Electrica 05",
        imagen: "./img/electrica/05.jpeg",
        categoria: {
            nombre: "Electricas",
            id: "electrica"
        },
        precio: 2000
    },
    {
        id: "electrica-06",
        titulo: "Electrica 06",
        imagen: "./img/electrica/06.jpeg",
        categoria: {
            nombre: "Electricas",
            id: "electrica"
        },
        precio: 2000
    },
    {
        id: "electrica-07",
        titulo: "Electrica 07",
        imagen: "./img/electrica/07.jpeg",
        categoria: {
            nombre: "Electricas",
            id: "electrica"
        },
        precio: 2000
    },
    {
        id: "electrica-08",
        titulo: "Electrica 08",
        imagen: "./img/electrica/08.jpeg",
        categoria: {
            nombre: "Electricas",
            id: "electrica"
        },
        precio: 2000
    },
    {
        id: "electro-acustica-01",
        titulo: "electro-acustica 01",
        imagen: "./img/electroacustica/01.jpeg",
        categoria: {
            nombre: "ElectroAcustica",
            id: "electroacustica"
        },
        precio: 3000
    },
    {
        id: "electro-acustica-02",
        titulo: "electro-acustica 02",
        imagen: "./img/electroacustica/02.jpeg",
        categoria: {
            nombre: "ElectroAcustica",
            id: "electroacustica"
        },
        precio: 3000
    },
    {
        id: "electro-acustica-03",
        titulo: "electro-acustica 03",
        imagen: "./img/electroacustica/03.jpeg",
        categoria: {
            nombre: "ElectroAcustica",
            id: "electroacustica"
        },
        precio: 3000
    },
    {
        id: "electro-acustica-04",
        titulo: "electro-acustica 04",
        imagen: "./img/electroacustica/04.jpeg",
        categoria: {
            nombre: "ElectroAcustica",
            id: "electroacustica"
        },
        precio: 3000
    },
    
];

// Seleccionar el contenedor de productos usando su ID
const contenedorProdutos = document.querySelector("#contenedor-produtos");
const botoncategoria = document.querySelectorAll(".boton-categoria");
const tituloprincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");




// Imprimir en la consola para verificar si contenedorProdutos es null o un elemento HTML
console.log(contenedorProdutos);

// Función para cargar los productos en el contenedor
function cargarproductos(productosObtenidos) {

    contenedorProdutos.innerHTML = "";
    // Iterar a través de cada producto en la lista de productos
    productosObtenidos.forEach(producto => {
        // Crear un nuevo elemento <div> para cada producto
        const div = document.createElement("div");
        div.classList.add("producto"); // Agregar la clase "producto" al div creado

        // Configurar el contenido HTML del div para mostrar la información del producto
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        // Verificar si contenedorProdutos es null antes de agregar el div al contenedor
        if (contenedorProdutos) {
            contenedorProdutos.append(div); // Agregar el div al contenedor de productos
        } else {
            console.error("El contenedor de productos no se encontró."); // Mostrar error si contenedorProdutos es null
        }
    });

    actualizarBotonesAgregar();
}

// Llamar a la función cargarproductos para cargar los productos en el contenedor
cargarproductos(productos);

// Seleccionar todos los elementos que tienen la clase ".boton-categoria"


// Agregar un event listener a cada botón seleccionado
// Iterar sobre cada botón en la lista de botones
botoncategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        // Remover la clase "active" de todos los botones
        botoncategoria.forEach(botonIndividual => botonIndividual.classList.remove("active"));

        // Agregar la clase "active" al botón que ha sido clickeado
        e.currentTarget.classList.add("active");

        // Filtrar productos basados en la categoría del botón clickeado
        const ProductosActusticos = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

        // Verificar si el botón clickeado es diferente a "todos"
        if (e.currentTarget.id !== "todos") {
            // Imprimir en la consola los productos filtrados y cargarlos
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            
            tituloprincipal.innerText = productoCategoria.categoria.nombre;

            cargarproductos(ProductosActusticos);
        } else {
            
            // Cargar todos los productos si se hace clic en el botón "todos"
            cargarproductos(productos);
            tituloprincipal.innerText = "Todos los productos"

        }
    });
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {boton.addEventListener("click", agregarAlcarrito); 


    });
}

const productosencarrito =[];

function agregarAlcarrito(e){

    const idBoton = e.currentTarget.id;

    const productoagregado = productos.find(productos => productos.id === idBoton);

    if(productosencarrito.some(producto => producto.id === idBoton)){
       const index = productosencarrito.findIndex(producto => producto.id === idBoton);
       productosencarrito[index].cantidad++;

    } else {
        productoagregado.cantidad = 1;
        productosencarrito.push(productoagregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosencarrito));


}

function actualizarNumerito(){
    let nuevonumerito = productosencarrito.reduce((acc, producto) => producto.cantidad, 0);

    numerito.innerText = nuevonumerito;
}
