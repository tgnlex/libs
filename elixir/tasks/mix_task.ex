defmodule Mix.Tasks.Hello do
  use Mix.Task
  def run(_) do
    Mix.shell().info("This is a mix.task file ")
  end
end
