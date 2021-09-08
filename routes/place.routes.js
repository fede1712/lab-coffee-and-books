const router = require("express").Router();
const Place = require('./../models/place.model')


router.get("/crear", (req, res) => {

    res.render('place/create')
})

router.post("/crear", (req, res) => {
    const { name, type, lat, lng } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => console.log('Error', err))
})

router.get("/listado", (req, res) => {

    Place
        .find()
        .then(places => res.render('place/list', { places }))
        .catch(err => console.log('Error', err))

})

router.get("/mapa", (req, res) => {
    res.render('map/map')
})

router.get('/editar/:id', (req, res) => {
    const { id } = req.params
    res.render('place/edit')
})

router.post('/editar/:id', (req, res) => {
    const { name, type, lat, lng } = req.body
    const { id } = req.params
    Place
        .findByIdAndUpdate(id, { name, type, lat, lng })
        .then(() => res.redirect('/listado'))
        .catch(err => console.log('Error', err))
})

router.post('/eliminar/:id', (req, res) => {
    const { id } = req.params
    Place
        .findByIdAndRemove(id)
        .then(() => res.redirect('/listado'))
        .catch(err => console.log('Error', err))
})
module.exports = router