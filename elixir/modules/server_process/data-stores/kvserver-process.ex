defmodule ServerProcess do
  def start(callback_module) do
    spawn(fn ->
      initial_state = callback_module.init
      loop(callback_module, initial_state)
    end)
  end
  def call(server_pid, request) do
    send(server_pid, {:call, request, self()})
    receive do
      {:response, response} ->
        response
      end
  end
  def cast(server_pid, request) do
    send(server_pid, {:cast, request})
  end
  defp loop(callback_module, current_state) do
    receive do
      #Handle Call Requests
      {:call, request, caller} ->
        {response, new_state} =
          callback_module.handle_call(
            request,
            current_state
          )
        #Send Response
        send(caller, {:response, response})
        loop(callback_module, new_state)
        #Handle Cast Requests
      {:cast, request} ->
        new_state =
          callback_module.handle_cast(
            request,
            current_state
          )
        loop(callback_module, new_state)
    end
  end
end
defmodule KeyValueStore do
  use GenServer
  def start do
    GenServer.start(KeyValueStore, nil, name: KV)
  end
  def put(pid, key, value) do
    GenServer.cast(pid, {:put, key, value})
  end
  def get(pid, key) do
    GenServer.call(pid, {:get, key})
  end
  def init (_) do
    :timer.send_interval(5000, :cleanup)
    {:ok, %{}}
  end
  simple GenServer
  def handle_info(:cleanup, state) do
    IO.puts "performing cleaning..."
    {:noreply, state}
  end
  simple GenServer
  def handle_cast({:put, key, value}, state) do
    {:noreply, Map.put{ key, value, state}}
  end
  simpl GenServer
  def handle_call({:get, key}, nil, state) do
    {:reply, Map.get(state, key), state}
  end
end
