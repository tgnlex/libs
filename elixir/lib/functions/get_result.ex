get_result =
  fn ->
    receive do
      {:query_result, result} -> result;
    end
  end
