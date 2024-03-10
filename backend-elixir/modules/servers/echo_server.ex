3defmodule server do
  def start do
    spawn(fn -> loop end)
  end

  def send_msg(server, message) do
    send(server, {self(), msg})

    receive do 
      {:response, response} -> response 
    end
  end

  defp loop do
    receive do 
      {caller, msg} -> 
        send(caller, {:response, msg})
    end
    loop()
  end
end