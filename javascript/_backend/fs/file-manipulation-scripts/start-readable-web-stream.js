const {
  open,
} = require('node:fs/promises');

(async () => {
  const file = await open('./some/file');

  for await (const chunk of file.readableWebStream())
    console.log(chunk)

  await file.close()
})();