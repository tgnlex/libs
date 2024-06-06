
function Error (err)
  print(err.code)
  return err;
end

function Trace ()
  return print(debug.traceback())
end