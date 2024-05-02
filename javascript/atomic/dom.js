const genElem = (type, value) => {
  const elem = document.createElement(type);
  const content = document.createTextNode(`${value}`)
  elem.appendChild(content);
  return elem;
}
const addElem = (loc, elem) => {
  const base = document.querySelector(loc);
  base.innerHTML = `${elem}`;
}
// Example 
const header = genElem("h1", "Hello World")
addElem('#app', header)