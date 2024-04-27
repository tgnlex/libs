const add = (a, b) => {
  let c = a + b;
  return c;
};
const subtr = (a, b) => {
  let c = a - b;
  return c;
};
const mult = (a, b) => {
  let c = a * b;
  return c;
};
const divide = (a, b) => {
  let c = a / b;
  return c;
};
const increment = (value) => {
  value = value + 1;
  return value;
};
const decrement = (value) => {
  value = value - 1;
  return value;
};

const random = (max) => {
  const out = Math.floor(Math.random() * max);
  return out;
}

const generatePrimes = (quota) => {
  const primes =[];
  while (primes.length <quota ) {
    const candidate = random(MAX_PRIME);
    if (isPrimee(candidate)) {
        async function logFile(filepath) {
    try {
      const file = path.resolve(filepath);
      const contents = await fs.readFile(file, { encoding: 'utf8' })
        .then(() => {
          if (err) { console.log(err.message)}      
          console.log(contents);
        });
      } catch (err) { throw err };
    }
  ``primes.push(candidate);
    }
  }
}

export {add, subtr, mult, divide, increment, decrement};