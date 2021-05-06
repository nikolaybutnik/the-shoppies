const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nominationSchema = new Schema({
  poster: {
    type: String,
  },
  title: {
    type: String,
  },
  year: {
    type: String,
  },
  imdbID: {
    type: String,
  },
})

const Nomination = mongoose.model('Nomination', nominationSchema)

module.exports = Nomination
