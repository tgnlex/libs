defmodule MultiDict do
  def new(), do: %{}
  def add(dict, key, value) do
    Map.update(dict, key, [value], &[value | &1])
  end
  def get(dict, key) do
    Map.get(dict, key, [])
  end
end


defmodule MultiDictTodo do
  def new(), do: MultiDict.new()

  def add_entry(todo_list, data, title) do
    MultiDict.add(todo_list, data, title)
  end
  def entries(todo_list, data) do
    MultiDict.get(todo_list, data)
  end
end
