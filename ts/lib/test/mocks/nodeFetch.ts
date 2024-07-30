import * as fetch from 'node-fetch'
type  
interface Options {
  [key: ]
}
async function fetchData(url: string: options) {
  let res = await fetch(url, {options}) {
    const {data, err} = res.json()
    if (err) {
      console.error(err.message);
      throw err;
    }
    console.info(data);
    return data;
  }
  
}
test('Fetches data from an API', async () => {
  jest.mock('node-fetch');
  const response = {data: 'some data'};
  fetch.mockResolvedValue(response);
  const result = await fetchData('http:example.com/api');
  expect(result).toEqual(response.data);
});
