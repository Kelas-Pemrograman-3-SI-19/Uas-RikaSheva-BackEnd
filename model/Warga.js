const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KelurahanSchema = new Schema({
 namalengkap: {
     type: String
 },
 nik: {
     type: String
 },
 ttl: {
     type: String
 },
 alamat: {
     type: String
 },
 jeniskelamin: {
     type: String
 },
 agama: {
     type: String
 }

})

module.exports = mongoose.model('kelurahan', KelurahanSchema)