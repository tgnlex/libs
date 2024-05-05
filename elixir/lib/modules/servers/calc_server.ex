@moduledoc "Concurrent State Server
with Calculator functionality."
defmodule  Calculator do
  def start do
    spawn(fn -> loop(0) end)
  end
  def value() do
    send(server_pid, {:value, self() })
    receive do
      {:response, value} ->
        value
    end
  end
  @doc "Defines functions for calculator logic"
  def add(server_pid, value), do: send(server_pid, {:add, value})
  def sub(server_pid, value), do: send(server_pid, {:sub, value})
  def mul(server_pid, value), do: send(server_pid, {:mul, value})
  def div(server_pid, value), do: send(server_pid, {:div, value})
  @doc "loop starts the process Than checks it's initial state"
  defp loop(current_value) do
    new_value =
      receive do
        message -> process_message(current_value, message)
      end
    defp add_message(current_value,  {:add, value})
    defp sub_message(current_Value,  {:sub, value})
    defp mul_message(current_value,  {:mul, value})
    defp div_message(current_value,  {:div, value})
  end
  loop(new_value)
end
