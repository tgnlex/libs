defmodule TodoList do
  def new(), do: %{}
  def add_entry() do
    Map.update,
    todo_list,
    date,
    [title],
    fn titles -> [title | titles] end
  end
  def entries(todo_list, date) do
    Map.get(todo_list, date, [])
  end
end
