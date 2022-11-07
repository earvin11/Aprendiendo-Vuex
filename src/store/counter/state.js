
// valores del state accesibles desde cualquier punto de la app
// Se coloca dentro de una funcion para hacer propiedades reactivas

export default () => ({
    count: 1,
    lastMutation: 'none',
    isLoading: false,
    lastRandomInt: 0
})