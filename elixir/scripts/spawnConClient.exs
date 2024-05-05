server = Server.start()
Enum.each(
  1..7,
  fn msg ->
    spawn(fn->
      IO.puts("Sending Msg ##{msg}")
      response = Server.send_msg(server, i)
      IO.puts("Response: #{response}")
    end)
  end
)

