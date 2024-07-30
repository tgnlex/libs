type Value = number | string | boolean | void;
interface Pair = { 
  [key: Value]: Value 
};
interface TestData {
  data: Value | Pair | Value[] | Pair[[];
};

interface TestCase {
  input: { 
    data: TestData 
  };
  expected: {
    data: TestData;
  };
};

export {TestCase};
