const express = require('express')
const app = express()

const getTime = function(req, res, next) {
	req.requestTime = Date.now()
}

app.use(getTime)
// How to implement
app.get('/', (req, res) => {
	let res_msg = 'Hello World<br>'
	res_msg += `<small>Requested at: $(req.reequestTime}</small>`
	res.send(res_msg)
})

app.listen(3000)