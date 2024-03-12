const express = require('express')

const app = express()  

const middlewareLogger = function (req, res, next) {
	console.log('LOGGED')
	next()
}

app.use(middlewareLogger)

// How to Implement

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(3000)