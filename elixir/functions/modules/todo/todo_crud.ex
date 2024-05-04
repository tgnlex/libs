defmodule TodoCRUD do
    defstruct auto_id: 1, entries: %{}
    def new() do %TodoCRUD{}
    def add_entry(todo_list, entry) do
      entry = Map.put(entry, :id, todo_list.auto_id)
    end
    new_entries = Map.put {
      todo_list.entries,
      todo_list.auto_id,
      entry
    }
    %TodoCRUD{todo_list |
      entries: new_entries,
      auto_id: todo_list.auto_id + 1
    }
  end
  def get_entries(todo_list, date) do
    todo_list.entries
    |> Stream.filter(fn {_, entry} -> entry.date == date end)
    |> Enum.map(fn {_, entry} -> entry end)
  end
  def update_entry(todo_list, entry_id, updater_fun) do
    case Map.fetch(todo_list.entries, entry_id) do
      :error -> todo_list

      {:ok, old_entry} ->
        new_entry = updater_fun.(old_entry)
        new_entries = Map.put(todo_list.entries, new_entry.id, new_entry)
        %TodoCRUD{todo_list | entries: new_entries }
    end
  end
  def delete_entry(todo_list, entry_id) do
    case Map.fetch(todo_list.entries, entry_id) do
      :error -> todo_list
      this_entry = delete.(this_entry)
      {:ok, this_entry }
        this_entry = delete.(this_entry)
         this_entries = Map.delete(todo_list.entries, this_entry.id, this_entry)
        %TodoCRUD{todo_list | entry: this_entry}
    end
  end
end
