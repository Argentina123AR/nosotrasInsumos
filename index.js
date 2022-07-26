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

