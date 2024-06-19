function ProtCall (func, params)
  if pcall(func(params)) then 
    return func(params)
  else 
    local status, err = pcall(function () error({code=121}) end)
    Error(err);
    return status;
  end
end