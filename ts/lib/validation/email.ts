function validateEmail() {
  let pattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-][2,4]$/);
  return emailRegex.test(email);
};

export {validateEmail};
