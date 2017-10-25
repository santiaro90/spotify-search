const request = require('request').defaults({ json: true })
const router = require('express').Router()

const CLIENT_ID = process.env.CLIENT_ID || 'CLIENT_ID'
const CLIENT_SECRET = process.env.CLIENT_SECRET || 'CLIENT_SECRET'

const BASE_64_SECRET = new Buffer(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
const AUTH_HEADER = `Basic ${BASE_64_SECRET}`

router.get('/login', (req, res) => {
    const options = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            Authorization: AUTH_HEADER,
        },
        form: {
            grant_type: 'client_credentials',
        },
        json: true,
    }

    request.post(options, function onAuthComplete(err, response, body) {
        if (!err && response.statusCode === 200) {
            res.send({ token: body.access_token })
        } else {
            res.status(response.statusCode).send(body)
        }
    })
})

module.exports = router
