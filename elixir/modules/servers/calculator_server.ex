@moduledoc "Concurrent State Server
with Calculator functionality."
defmodule  Calculator do
  @doc "start function spawns server process"
  def start do
    spawn(fn -> loop(0) end)
  end

  @doc "value function to retrieve server statae "
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

  @doc "loop starts the process
  Than check it's initial state"
  defp loop(current_value) do
      new_value =
        receive do
          @doc "Getter request tha retrieves initial values "
          {:value, caller} ->
            send(caller, {:response, current_value})
            current_value

            {:add, value} -> current_value + value
            {:sub, value} -> current_value - value
            {:mul, value} -> current_value * value
            {:div, value} -> current_value / value

            invalid_request ->
              IO.puts("invalid request #{inspect invalid_request}")
              current_value
        end

      loop(new_value)
    end

end
