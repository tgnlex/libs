defmodule Cache do
  use GenServer
  @moduledoc """
  Documentation for `Todo`.
  """
  @doc """
  Hello world.
  """
  def init(_) do
    {:ok, %{}}
  end
  def handle_call({:server_process, structure_name}, _,  todo_servers) do
    case Map.fetch(server, structure_name) do
      {:ok, server} ->
        {:reply, server, servers,}
      :error ->
        {:ok, new_server} = ServerModule.start()
        {
          :reply,
          new_server,
          Map.put(servers, structure_name, new_server)
        }
      end
  end
  def start do
    GenServer.start(__MODULE__, nil)
  end
  def server_process(cache_pid, structure_name) do
    GenServer.call(cache_pid, {:server_process, todo_list_name})
  end
end
