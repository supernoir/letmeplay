const express = require('express')
const app = express()
const morgan = require('morgan')

const port = process.env.PORT || 3031

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(function(request, response, next) {
	response.header('Access-Control-Allow-Origin', '*')
	response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	response.header('Access-Control-Allow-Methods', 'POST, GET')
	next()
})

// Serving from JSON
const gamesData = require('./data/games.json')

app.get('/', (req, res) => {
	res.json({
		message: 'Use the API Documentation for routes'
	})
})

app.get('/games', (req, res) => {
	res.json({
		games: gamesData
	})
})

app.get('/characters/:orientation', (req, res) => {
	res.json({
		query: req.params,
		characters: gamesData[0].characters
	})
})

app.get('/characters', (req, res) => {
	res.json({
		games: gamesData
	})
})

app.listen(port, () => {
	console.info('API running on port %d', port)
})
