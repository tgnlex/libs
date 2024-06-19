try_helper = fn fun ->
  try do
    raise("Something went wrong!")
  catch type, value ->
    IO.puts("Error\n #{inspect(type)} \n #{inspect(value)}")
  after
    IO.puts("Cleanup code..")
  end
end
