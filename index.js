const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.json('hi')
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
