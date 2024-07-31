
function Error (err)
  print(err.code)
  return err;
end

function TypeError(value)
  return error("Function does not accept a " .. type(value))
end