let productosPromocionales = document .getElementById ("promo");


productosPromocionales = [ 
    {
        promocion1: "vitaminac color",
        precio:  1000,
    },
    {
        promocion2: "serum hidratante facial",
        precio: 1250,
    },
    {
        prommocion3: "serum facial vitaminac",
        precio: 1100,
    },
]

//let dinero= prompt ("cuanto dinero tienes?");

console.log(productosPromocionales.some( (elemento) => {
    return elemento.precio > 1000
}))

let dineroDisponible = prompt ("cuánto dinero tienes?");

if (dineroDisponible <= 1000){
    alert ("te alcanza para la promocion1");
} else {
    if (dineroDisponible > 1000 && dineroDisponible <= 1100){
        alert ("te alcanza para la promocion3");
    }
    else {
        if(dineroDisponible >1100 && dineroDisponible <= 1250){
            alert ("te alcanza para la promocion3")
        }
    }
}

const formulario = document.querySelector ("#formulario");
const inputNombre = document.querySelector ("#nombre");
const inputApellido = document.querySelector ("#apellido");
const inputEdad = document.querySelector ("#edad");
const inputEmail = document.querySelector ("#email");
const inputMensaje = document.querySelector ("#mensaje");
const submit = document.querySelector ("#submit");


class clientes{
    constructor (nombre, apellido, edad, email, mensaje){
        this.nomre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.mensaje = mensaje;
    }
}

formulario.onsubmit = (event) => {
    event.preventDefault()
    console.log (event)
    clientes.push (new clientes (inputNombre.value, inputApellido.value, inputEdad.value, inputEmail.value, inputMensaje.value))
    console.log (clientes)
}
