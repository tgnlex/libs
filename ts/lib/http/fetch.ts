import {FetchError} from './errors.ts';

async function getData(url: string) {
  const res = await fetch(url, {method: "GET"});
  if(res.ok) {
    const data = await res.json();

    return data;
  } else {
    FetchError.log('GET', url)
    console.error(err);
  }
}

async function postData (url: string, body?: string, headers?: []) {
  const res = await fetch(url, {
    method: "POST", 
    body: body || undefined, 
    headers: headers || undefined
  })
  if(res.ok) {
    const data = await res.json();
    return data;
  } else { 
    FetchError.log("POST", url)  
    console.error(err)
  };
  .
}
