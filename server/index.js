const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '.env') })

const routes = require('./routes')

const PORT = process.env.PORT || 9000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})
