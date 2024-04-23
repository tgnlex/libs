const noop = () => {
  return;
}
const read = (data) => {
  return data;
} 
const log = (name, data) => {
  const src = name.toUpperCase();
  console.log(`[${src}] ${data}`)
}
const json = (object) => {
  const data = JSON.stringify(object);
  log('lib', `Converted ${object} to json string`)
  return data;
}

export {noop, read, log, json};