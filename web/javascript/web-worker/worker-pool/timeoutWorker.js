const workerpool = require('workerpool')
function timeout(delay) {
	return new Promise(function(resolve, reject) {
		setTimeout(resolve, delay);
	})
}

workerpool.worker({
	timeout: timeout,
});