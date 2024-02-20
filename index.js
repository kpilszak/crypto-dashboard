const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json('hi')
})

app.get('/convert', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            to_currency: 'USD',
            function: 'CURRENCY_EXCHANGE_RATE',
            from_currency: 'BTC'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
        console.log(response.data)
    }).catch ((error) => {
        console.error(error)
    })
})

app.get('/news', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch ((error) => {
        console.error(error)
    })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
