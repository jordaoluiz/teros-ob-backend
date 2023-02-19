const axios = require('axios');

const openBankingApi = axios.create({
    baseURL: 'https://data.directory.openbankingbrasil.org.br'
})

module.exports = openBankingApi;