function Trim (str)
  return (string.gsub(str, "^%s*(.-)%s*$", "%1"))
end