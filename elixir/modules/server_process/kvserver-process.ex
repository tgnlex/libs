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
  #Start KV
  def start do
    ServerProcess.start(KeyValueStore)
  end
  # Put Message
  def put(pid, key, value) do
    ServerProcess.call(pid, {:put, key, value})
  end
  # Get Message
  def get(pid, key) do
    ServerProcess.call(pid, {:get, key})
  end
end
