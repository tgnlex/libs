defmodule DatabaseServer do 
  def start do 
    spawn(&loop/0)
  end

  defp loop do
    receive do      
      {:run_query, from_pid, query_def} ->
      send(caller, {:query_result, run_query(query_def))
    end

    loop()
  end
  defp run_query(connection, query_def) do 
    Process.sleep(2000)
    #{query_def} result "
  en

  def run_async(server_pid, query_def) do
    send(server_pid, {:run_query, self(), query_def})
  end
end