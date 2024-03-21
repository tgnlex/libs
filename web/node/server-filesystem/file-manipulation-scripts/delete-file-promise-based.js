const {unlink} = require('node:fs/promises');

(async function(path) {
	try {
	  await unlink(path)
	  console.log(`successfully deleted ${path}`)
	} catch (error) { 
	  console.log(`An error has occured, unable to delete ${path}`)
	  console.error(error.message)
	  console.log(error)
	}
})('/tmp/hello');