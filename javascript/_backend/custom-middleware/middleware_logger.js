const express = require('express')

const app = express()  

const middlewareLogger = function (req, res, next) {
	console.log('[HTTP]: Endpoint Hit.')
	next()
