require('dotenv').config
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const PORT = 3000

// app.get('/', (req, res) => {
//     res.send("Hello, world!")
// })


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})