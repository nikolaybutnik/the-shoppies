require('dotenv').config()

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()
const fetch = require('node-fetch')
const mongoose = require('mongoose')
const Nomination = require('./client/src/models/Nomination')

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/theshoppies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

// Define API routes here
app.get('/getmovies/:search/:page', (req, res) => {
  fetch(
    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${req.params.search}&type=movie&page=${req.params.page}`
  )
    .then((res) => res.json())
    .then((data) => {
      res.send({ data: data })
    })
    .catch((err) => {
      res.status(500).json(err)
    })
})

app.post('/newnomination', (req, res) => {
  try {
    // Check if movie is already nominated
    // const movieNominated = !!(await Nomination.countDocuments({ imdbID: req.body.imdbID }))
    // console.log(movieNominated)
    Nomination.create(req.body)
      .then((nomination) => {
        console.log(nomination)
        res.status(201).send({ data: nomination })
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  } catch (err) {
    res.status(500).send({
      errors: [
        {
          status: 'Server error',
          code: '500',
          title: 'Problem saving document to the database.',
        },
      ],
    })
  }
})

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
