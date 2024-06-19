static void Greeter()
{
  string data1 = "Hello"
  string data2 = "World"

  message = data1.Trime()
  subject = data2.Trim();

  greet = $"{message}{subject}"
  Console.WriteLine($"{greeting}");

  bye = message.Replace("Hello", "Best of luck!, I bid you good day,")
  Console.WriteLine($"{bye}")
}