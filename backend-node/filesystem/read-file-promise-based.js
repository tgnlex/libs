import { open } from 'node:fs/promises';

let filehandle; 
try {
  filehandle = await open('some-file.txt', 'r')
} finally {
	await filehandle?.close();
}