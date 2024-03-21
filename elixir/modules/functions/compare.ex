defmodule Compare do 
  @moduledoc "Implements basic comparison functions"

  @doc "Outputs the larger of two variables"
  def max(a, b) do
    unless a >= b, do: b, else: a
  end