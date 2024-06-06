<template>
  <div class="home">
    <h1>Dolci Disponibili</h1>
    <div id="lista-dolci">
      <ul v-for="dolce in dolci" :key="dolce.id">
        <li>Nome: {{ dolce.nome }}</li>
        <li>Prezzo: €{{ dolce.prezzo.toFixed(2) }}</li>
        <li>Quantità: {{ dolce.quantita }}</li>
      </ul>
    </div>
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
  methods: {
    aggiornaPrezzi() {
      const oggi = new Date();
      this.dolci = this.dolci.map(dolce => {
        const dataInizio = new Date(dolce.data);
        const diffGiorni = Math.floor((oggi - dataInizio) / (1000 * 60 * 60 * 24));

        if (diffGiorni === 0) {
          dolce.prezzo = dolce.prezzo;
        } else if (diffGiorni === 1) {
          dolce.prezzo *= 0.8;
        } else if (diffGiorni === 2) {
          dolce.prezzo *= 0.2;
        } else if (diffGiorni >= 3) {
          // Dolce non più commestibile
          return null;
        }
        return dolce;
      }).filter(dolce => dolce !== null);
    }
  },
  created() {
    api.getDolci().then(data => {
      console.log('Dati ricevuti nel componente:', data);
      this.dolci = data;
      this.aggiornaPrezzi();
      // setInterval(this.aggiornaPrezzi, 5000);
    });
  }
};
</script>

<style scoped>

#lista-dolci 
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    text-align: start;
  }
</style>

