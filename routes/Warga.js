const router = require('express').Router()
const wargaController = require('../controller/Warga')

router.post('/insert', (req, res) => {
    wargaController.simpanWarga(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.json(err))
})

router.get('/tampil', (req, res) => {
    wargaController.tampilWarga()
       .then((result) => res.json(result))
       .catch((err) => res.json(err))
})

router.put('/edit/:id', (req, res) => {
    wargaController.edit(req.body, req.params.id)
       .then(result => res.json(result))
       .catch(err => res.json(err))
})

router.get('/tampilsingle/:id', (req, res) => {
    wargaController.tampilkanSatuData(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/hapus/:id', (req, res) => {
    wargaController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router