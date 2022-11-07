// import getRandomInt from '../../helpers/getRandomInt'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

/* --------Modulo separado por archivos  */
const counterStore = {
    namespaced: true,
    // Importa el state de su archivo JS
    state: state,
    // lo que venga de su archivo mutations.js
    mutations: mutations,
    actions: actions,
    getters: getters
}

/*  ----------------------- Modulo un solo archivo ---------------  */

//const counterStore = {

    //namespaced: true,

    // valores del state accesibles desde cualquier punto de la app
    // Se coloca dentro de una funcion para hacer propiedades reactivas
    // state: () => ({
    //     count: 1,
    //     lastMutation: 'none',
    //     isLoading: false,
    //     lastRandomInt: 0
    // }),

    // las mutaciones son las que cambian los valores del state, siempre deben ser sincronas nunca asincronas
    // mutations: {
        // increment(state) {
        //     state.count++
        //     state.lastMutation = 'increment'
        // },
        // incrementBy(state, value) {
        //     state.count+=value
        //     state.lastMutation = 'IncrementBy'
        //     state.lastRandomInt = value
        // },
        // setLoading( state, value ) {
        //     state.isLoading = value
        // }
    // },


    // Las actions son utilizadas para peticiones HTTP por lo tanto pueden ser asincronas
    // Asi como en mutations tenemos acceso al state, en actions tenemos acceso al context del store
    // con el context podemos ejecutar commits (mutations) luego de haber obtenido la data de una peticion HTTP, 
    // pero podemos destructurar el commit del context
    // actions: {
    //     async incrementRandomInt({ commit }) {
    //         //Colocamos el loading en true
    //         commit('setLoading', true)
    //         // Obtenemos la data de una peticion asincrona
    //         const randomInt = await getRandomInt()
    //         // Ejecutamos la mutacion incrementBy enviandole como argumento el valor obtenido de la peticion
    //         commit('incrementBy', randomInt)
    //         // Loading en false
    //         commit('setLoading', false)
    //     }
    // },

    // Getters son como propiedades computadas
    // getters: {
    //     squareCount( state ) {
    //         return state.count * state.count
    //     }
    // }

//}

export default counterStore