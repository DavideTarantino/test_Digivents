import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getDolci() {
    return apiClient.get('/dolci')
      .then(response => {
        console.log('Dati ricevuti da API:', response.data);
        return response.data; // Assicurati di restituire solo i dati
      })
      .catch(error => {
        console.error('Errore nel recupero dei dati:', error);
        throw error;
      });
  },
  postDolce(dolce) {
    return apiClient.post('/dolci', dolce);
  }
};
