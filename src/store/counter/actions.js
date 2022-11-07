import getRandomInt from '@/helpers/getRandomInt'


export const incrementRandomInt = async({ commit }) => {
    //Colocamos el loading en true
    commit('setLoading', true)
    // Obtenemos la data de una peticion asincrona
    const randomInt = await getRandomInt()
    // Ejecutamos la mutacion incrementBy enviandole como argumento el valor obtenido de la peticion
    commit('incrementBy', randomInt)
    // Loading en false
    commit('setLoading', false)
}