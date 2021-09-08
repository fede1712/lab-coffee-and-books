
const router = require("express").Router()

const Places = require('./../models/place.model')

router.get('/places', (req, res) => {

    Places
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))

})

module.exports = router