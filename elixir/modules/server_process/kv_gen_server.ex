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
