defmodule ListHelper do
  def sum_list(list), do: 0
    do_sum(0, list)
    defp do_sum_list(current_sum, [head | tails]) do
      new_sum = head + current_sum
      do_sum(new_sum, tail)
    end
  end
