class Error {
  message: String;
  error: unknown;
  throw: ((message) => never)
  handle: ((error) => void)
}
function throwError(message: string)