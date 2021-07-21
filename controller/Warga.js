const wargaModel = require('../model/Warga')
const objectId = require('mongoose').Types.ObjectId

exports.simpanWarga = (data) =>
  new Promise((resolve, reject) => {
    wargaModel.create(data)
    .then(() => {
        resolve({
            sukses: true,
            pesan: 'Berhasil Input Data Warga'
        })
    }).catch(() => {
        reject({
            sukses: false,
            pesan: 'Gagal Input Data Warga'
        })
    })  
}) 

exports.tampilWarga = () =>
  new Promise((resolve, reject) => {
    wargaModel.find()
       .then(data => {
         resolve({
             sukses: true,
             pesan: 'Berhasil Memuat Data Warga',
             data: data
         })
       }).catch(() => {
           reject({
               sukses: false,
               pesan: 'Gagal Memuat Data Warga',
               data: []
           })
       })
  })

  exports.edit = (data, id) =>
    new Promise((resolve, reject) => {
      wargaModel.updateOne({
        _id: objectId(id)
      }, data).then(() => {
          resolve({
              sukses: true,
              pesan: 'Berhasil Mengubah Data Warga'
            })
          }).catch(() => {
              reject({
                  sukses: false,
                  pesan: 'Gagal Mengubah data Warga'
              })
          })
      })

      exports.tampilkanSatuData = (id) => 
        new Promise((resolve, reject) => {
            wargaModel.findOne({
                _id: objectId(id)     
            }).then((data) => {
                resolve(data)
            }).catch(() => reject({
                sukses: false,
                pesan: 'Gagal Memuat Data'
            }))
        })

        exports.delete = (id) =>
          new Promise((resolve, reject) => {
              wargaModel.deleteOne({
                  _id: objectId(id)
              }).then(() => {
                  resolve({
                      sukses: true,
                      pesan: 'Berhasil Menghapus Data Warga'
                  })
              }).catch(() => {
                  reject({
                      sukses: false,
                      pesan: 'Gagal Menghapus data Warga'
                  })
              })
          })