async_query =
  fn query_def ->
    caller = self()
    spawn(fn ->
      send(Caller, {:query_result, run_query.(query_def)})
    end)
  end
