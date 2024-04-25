import {open} from 'node:fs/promises';

const fd = await open('/some_dir/some_input/some_event');

// Create stream from charector device
const stream = fd.createReadStream();
// Set an auto-timeout for 
// closing the stream.
setTimeout(() => {
	stream.close();
	stream.push(null)
	stream.read(0);
}, 100);

