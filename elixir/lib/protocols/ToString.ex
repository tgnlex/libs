defprotocol String.Chars do
  def to_string(data) do
    Integer.to_string(data)
  end
end
