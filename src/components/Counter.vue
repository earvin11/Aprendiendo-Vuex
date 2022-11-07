<template>
  <h1>Counter - Vuex</h1>
  <h3>Direct access - {{ $store.state.counter.count }}</h3>
  <h1>Computed: {{ countComputed }} </h1>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>LastMutation: {{ lastMutation }}</h2>
  <h3>Is Loading: {{ isLoading }}</h3>

  <h2>Direct getter - {{ $store.getters['counter/squareCount'] }}</h2>

</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex'

export default {

  // computed: mapState(['count'])

  computed: {
    countComputed() {
      return this.$store.state.counter.count
    },
    // De todo lo que haya en el state trae el valor de mapState, create una computada con nombre count y el valor de count del state
    ...mapState('counter', ['count', 'lastMutation', 'isLoading']) // del modulo counter extrae los valores de lo que este dentro del arr en el segundo argumento
    // ...mapState({
    //   // create una propiedad llamada count, con el valor de lo que haya en el state como count
    //   count: state => state.count,
    //   lastMutation: state => state.lastMutation
    // })
  },

  methods: {
    increment() {
      //este metodo increment realizara lo que sea que haga la mutacion definida en el store como 'increment'
      // para llamarla se utiliza la palabra commit
      this.$store.commit('counter/increment') // haz commit de la mutation increment dentro del modulo de counter
    },
    incrementBy() {
      // este metodo local utilizara la mutacion del store 'incrementBy' la cual require un valor para saber en cuanto incrementara
      // en el commit colocamos el nombre de la mutacion y como segundo argumento el valor que pide la mutacion
      this.$store.commit('counter/incrementBy', 5) // haz commit de la mutation incrementBy dentro del modulo counter

      // El mapActions te permite el acceso a un method dentro de la app, con lo que este definido como randomInt en este caso
      // this.randomInt()
    },
    // incrementByRandomInt() {
    //   this.$store.dispatch( 'incrementRandomInt' )
    // }

    // Podemos crear un method con el nombre de la action del store utilizando el mapActions
    // Asi lo tulizamos sin declarar un method como el de arriba sino que llamamos directamente la action del store
    // ...mapActions('counter', [ 'incrementRandomInt' ]) // del modulo counter extrae incrementRandomInt

    // De esta manera podemos renombrar la accion dentro de este component para evitar conflictos
    ...mapActions('counter', { 
      randomInt: 'incrementRandomInt' //primer argumento el modulo, luego las acciones que quiero extraer de ese modulo junto con el nombre que les quiero dar
    })
  }

}
</script>
