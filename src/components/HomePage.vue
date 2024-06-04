<template>
  <div class="home">
    <h1>Dolci Disponibili</h1>
    <ul>
      <li v-for="dolce in dolci" :key="dolce.id">
        {{ dolce.nome }} - €{{ dolce.prezzo }} - Quantità: {{ dolce.quantita }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'HomePage',
  data() {
    return {
      dolci: []
    };
  },
  methods: {},
  created() {
    api.getDolci().then(data => {
      console.log('Dati ricevuti nel componente:', data);
      this.dolci = data})
    }
};
</script>

<style scoped>
.home{
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
  color: blue;
}
li {
  padding: 10px 0;
}
</style>
