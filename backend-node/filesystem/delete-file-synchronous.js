const {unlinkSync} = require('node:fs');
try {
	unlinkSync('/tmp/hello')
} catch (err) {
	console.log('Error occured while deleting file.')
	console.log(error)
	console.log(error.message)
}