defprotocol IntOpsProtocol do
  def max(a, b) do
    unless a >= b, do: b, else: a
  end
  def min(a, b) do
    unless a >= b, do: a, else: b
  end
end
