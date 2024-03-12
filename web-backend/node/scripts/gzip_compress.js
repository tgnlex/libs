const { createGzip} = require('node:zlib');
const {pipeline} = require('node:stream');
const {
	createReadStream,
	createWriteStream,
} = require('node:fs');

const compress = createGzip();
const src = createReadStream('file.txt')
const output = createWriteStream('output.txt.gz')

pipeline(src, compress, output, (err) => {
	if (err) {
	console.error(err)
	process.exitCode = 1;
	}
});