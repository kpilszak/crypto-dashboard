import { useEffect, useState } from 'react'
import axios from 'axios'

const NewsFeed = () => {
    const [articles, setArticles] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
            }
        }

        axios.request(options).then((response) => {
            console.log(response.data)
            setArticles(response.data)
        }).catch ((error) => {
            console.error(error)
        })
    }, [])

    console.log(articles)

    return (
        <div className="news-feed">
            NewsFeed
        </div>
    )
}

export default NewsFeed
