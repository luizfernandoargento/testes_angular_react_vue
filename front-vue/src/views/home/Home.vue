<template>
  <div>
      <h1>{{ msg }}</h1>
      <h2>{{ legenda }}</h2>
      <input type="text" v-model="legenda">
      <!-- Você pode usar só ':value' no lugar do 'v-bind:value'. Vincula informação.
        Trocado por "v-model" que é two ways data binding, alteração dinâmica -->
      <button @click="resetLegenda">Reset Legenda</button>
      <!-- Vincula um evento, ação. -->
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data: function() {
    return {
      legenda: "Estou no Vue"
    }
  },
  methods: {
    resetLegenda() {
      this.legenda = 'Estou no Vue'
    }
  }
}
</script>

<style>

</style>