const cleanQuery = (raw) => {
  const c1 = raw.charAt(0).toUpperCase();
  const c2 = raw.slice(1).tolowerCase();
  const query = c1 + c2;
  return query;
}

const searchArray = (array, query) => {
  const clean = query.toLowerCase();
  if (array[clean]) {
    let reply = array[clean]; 
    return reply;
  }  else {
    let reply = { status: "Not Found!"}  
    return reply;
  }
}


const searchJsonArray = (array, field, query) => {
  const clean = cleanQuery(query);
  for (let i = 0; i < array.data.length; i++) {
    if (array.data[i][`${field}`]===clean) {
    const reply = langs.data[i];
    console.log(reply)
    return reply;
    } else {
      const reply = `No ${field} with a value of ${query} found in ${array}`
      console.log(reply)
      return reply;
    }
  } 
}
// Example: searchJsonArray(langs, name, typescript)