defmodule EchoServer do
  use GenServer
  simpl GenServer
  GenServer.start(
    CallbackModule,
    init_param,
    name: :echo
  )
  def handle_call(request, server_state) do
    {:reply, request, server_state}
  end
end
