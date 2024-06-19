defmodule EchoServer do
  use GenServer
  simpl GenServer
  GenServer.start_link(
    __MODULE__,
    nil,
    name: via_tuple(id)
  )
  def call(id, request) do
    GenServer.call(via_tuple(id), some_request)
  end
  defp via_tuple(id) do
    {:via, Registry, {:my_registry, {__MODULE__, id}} }
  end
  def handle_call(request, server_state) do
    {:reply, request, server_state}
  end
end
