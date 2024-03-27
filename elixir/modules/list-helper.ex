defmodule ListHelper do 
  def sum(list), do: 0
    do_sum(0, list)
  defp do_sum(current_sum, []) do
    current_sum
  end
  defp do_sum(current_sum, [head | tails])
    new_sum = head + current_sum 
    do_sum(new_sum, tail)
    end
  end
end