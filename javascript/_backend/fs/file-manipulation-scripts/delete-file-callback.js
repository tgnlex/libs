const {unlink} = require('node:fs');

unlink('/tmp/file', (err) => {
	if (err) throw err;
	console.log('Successfully deleted /tmp/hello')
})