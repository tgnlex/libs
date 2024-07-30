type Value = number | string | boolean | void;
type Pair = { [key: Value]: Value };
type Data = Value | Pair | Value[] | Pair[];

interface TestCase {
  input: Data;
  expected: Data;
}
;
function read(data: Data):Data {
  console.info(data)
  return data;
}
function pureTest(inputValue: Data, expectedOutput: Data, functionToTest: () => any): void {
  const outputValue = functionToTest(inputValue)
  if (expectOutput !== outputValue) {
  console.error(``)
  } else {
    console.info('ok', `$`)
  }
}

function testAll(testFn: () => void, cases: Case[]) {
  for (const c of cases) {
    testFn((c.input), (c.expected) read);
  }
}
