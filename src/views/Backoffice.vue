<template>
  <header>
    <nav>
      <img src="../../public/image001.jpg" alt="logo">
      <div>
        <RouterLink class="router-button" to="/">Torna alla Home</RouterLink>
      </div>
    </nav>
  </header>
  <hr>
  <main>
    <div class="backoffice">
      <div id="container">
        <h1>Inserisci qui il nuovo dolce:</h1>
        <form @submit.prevent="aggiungiDolce">
            <div>
              <label for="nome">Nome: </label>
              <input type="text" id="nome" v-model="nuovoDolce.nome" required>
            </div>
            <div>
              <label for="prezzo">Prezzo: </label>
              <input type="number" id="prezzo" v-model="nuovoDolce.prezzo" required step="0.01">
            </div>
            <div>
              <label for="quantita">Quantità: </label>
              <input type="number" id="quantita" v-model="nuovoDolce.quantita" required>
            </div>
            <div>
              <label for="data">Data di Messa in Vendita: </label>
              <input type="date" id="data" v-model="nuovoDolce.data" required>
            </div>
            <button class="router-button" type="submit">Aggiungi Dolce</button>
        </form>
      </div>
    </div>
  </main>
    
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    name: 'Backoffice',
    data() {
      return {
        dolci: [],
        nuovoDolce: {
          nome: '',
          prezzo: 0,
          quantita: 0,
          data: ''
        }
      };
    },
    methods: {
      aggiungiDolce() {
        api.postDolce(this.nuovoDolce).then(response => {
          this.dolci.push(response.data);
          this.nuovoDolce = {
            nome: '',
            prezzo: 0,
            quantita: 0,
            data: ''
          };
        });
      },
      caricaDolci() {
        api.getDolci().then(response => {
          this.dolci = response.data;
        });
      }
    },
    created() {
      this.caricaDolci();
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
  }

  main{
    .backoffice{
      width: 30%;
      margin: 0 auto;
      border: 1px solid black;
      height: 50vh;
      border-radius: 10px;
      margin-top: 3%;
      display: flex;
      flex-direction: column;
      align-items: center;
    
      h1{
        text-align: center;
        padding-block: 7%;
      }

      input{
        padding: 5px;
        border-radius: 10px;
        margin-block: 3%;
      }
    }
  }

  .router-button{
      text-decoration: none;
      color: white;
      border: 1px solid black;
      border-radius: 10px;
      padding: 5px;
      font-size: 15px;
      background: rgb(28,78,159);
      background: linear-gradient(168deg, rgba(28,78,159,1) 27%, rgba(162,193,57,1) 100%);
      cursor: pointer;
    }
  </style>
  