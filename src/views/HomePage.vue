<template>
  <header>
    <nav>
      <img src="../../public/image001.jpg" alt="logo">
      <div>
        <RouterLink id="router-button" to="/add">Aggiungi Dolce</RouterLink>
      </div>
    </nav>
  </header>
  <hr>
  <main>
    <div class="home">
      <h1>Dolci Disponibili:</h1>
      <div id="lista-dolci">
        <div class="card" v-for="dolce in dolci" :key="dolce.id">
          <h3>{{ dolce.nome }}</h3>
          <hr>
          <p><strong>Prezzo:</strong> €{{ dolce.prezzo.toFixed(2) }}</p>
          <p><strong>Quantita:</strong> {{ dolce.quantita }}</p>
          <p><strong>Data di produzione:</strong> {{ dolce.data }}</p>
        </div>
      </div>
    </div>
  </main>
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

nav{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-block: 1%;
  align-items: center;

  #router-button{
    text-decoration: none;
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    font-size: 15px;
    background: rgb(28,78,159);
    background: linear-gradient(168deg, rgba(28,78,159,1) 27%, rgba(162,193,57,1) 100%);
  }
}

main{
  .home{
    width: 90%;
    margin: 0 auto;
    margin-top: 1%;

    h1{
      font-size: 40px;
    }

    #lista-dolci{
      display: flex;
      gap: 10px;
      margin-top: 1%;

      .card{
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        width: calc(100% / 6 - 10px);
      }
    }
  }
}
</style>

