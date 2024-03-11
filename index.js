import express from 'express'
import cors from 'cors'
import { translate } from './utils/translator.js'

const api = express()
api.use(express.json())
api.use(cors())
const PORT = 5000

// Define a route handler for the empty route
api.get('/', (req, res) => {
    res.send('Welcome to the Transcription Server!')
})

api.post('/translate', (req, res) => {

    const { text } = req.body
    console.log("RCVD: ", text)
    translate(text, 'en')
        .then(response => {

            console.log(`Text: ${text}`)
            console.log(`Translation: ${response}`)

            res.status(200).send(JSON.stringify({ response, given: { ...req.body } }))

        })

})

// Start the server
api.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
