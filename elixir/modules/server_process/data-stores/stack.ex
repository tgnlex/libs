defmodule Stack do
  use GenServer
  # CLIENT
  def start_link(default) when is_binary(default) do
    GenServer.start_link(__MODULE__, default)
  end
  def push(pid, element) do
    GenServer.cast(pid, {:push, element})
  end
  def pop(pid) do
    GenServer.call(pid, :pop)
  end
  # SERVER (CALLBACKS)
  @impl true
  def init(elements) do
    initial_sate = String.split(element)
    {:ok, initial_state}
  end
  @imple true
  def  handle_call(:pop, _from, state) do
    [to_caller | new_state] = state
    {:reply, to_caller, new_state}
  end

  @impl true
  def handle_cast({:push, elements}, state) do
    new_state = {element | state}
    {:noreply, new_state}
  end
end
