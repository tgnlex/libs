defmodule Todo.Builder do
  def new(entries \\ []) do
    Enum.reduce(
      entries,
      %IterativeTodo{},
      &add_entry(&2, &1)
      )
  end

end
