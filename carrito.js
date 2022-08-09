let carrito2 = JSON.parse(localStorage.getItem("carrito")) || []
const detalle = document.querySelector("#detalle")

function productosCarrito() {
    carrito2.map(producto => {
        detalle.innerHTML += `
        <li class="detalleProd">
        <img src="${producto.img}"/>
        <p>${producto.name}</p>
        <p>${producto.price}</p>
        <button class="botonBorrar">X</button>
        </li>`
    })
}