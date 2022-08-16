
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

const aJSONYSubirALs = (clave, valor) =>{
    const clienteJSON = JSON.stringify(valor)
    localStorage.setItem(clave, clienteJSON)
}
formulario.onsubmit = (e) => {
    e.preventDefault()
    swal("se ha enviado correctamente");

}

//formulario.onsubmit = (event) => {
  //  event.preventDefault()
    //console.log (event)
    //clientes.push (new clientes (inputNombre.value, inputApellido.value, inputEdad.value, inputEmail.value, inputMensaje.value))
    //console.log (clientes)
    //aJSONYSubirALs ("clientes", clientes)
//}
const deLS = (clave) => {
    const clientesTraidosdeLs = localStorage.getItem ("clientes")
    const parsearclientes = JSON.parse ("clientesTraidosdelLS")
    return parsearclientes
}


const btnAumentar = document.querySelector(".btn-info");
const span = document.getElementById ("span");
let contador = 0

btnAumentar.addEventListener ("click", () => {
    console.log("activaste aumentar")
    contador++
    span.textContent = contador
})

const btnDisminuir = document.querySelector (".btn-danger");

btnDisminuir.addEventListener ("click",() =>{
    contador--
    span.textContent = contador
})

//librerias//

