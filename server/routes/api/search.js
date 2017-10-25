const request = require('request').defaults({ json: true })
const router = require('express').Router()

router.get('/tracks', (req, res) => {
    const options = {
        url: 'https://api.spotify.com/v1/search',
        headers: {
            Authorization: req.get('Authorization'),
        },
        qs: {
            q: req.query.q,
            limit: 10,
            offset: 0,
            type: 'track',
        },
        json: true,
    }

    request.get(options, function onSearchComplete(err, response, body) {
        if (!err && response.statusCode === 200) {
            res.send(body.tracks.items)
        } else {
            console.log(err)
            res.status(response.statusCode).send(body)
        }
    })
})

module.exports = router
