defmodule TestCase do 
  @doc false
  defmacro __using__(_opts) do 
    quote do 
      import TestCase

      @tests []

      @before_compile TestCase
    end
  end
  @doc """
    Defines a test case with the given description.

    ## Examples

      test "arithmetic operations" do
        4 = 2 + 2
      end

   """
  defmacro test(description, do: block) do
    function_name = String.to_atom("test " <> description)
      quote do 
      @tests [unquote(function_name) | @tests]
        def unquote(function_name)(), do: unquote(block)
      end 
    end

  @doc false
  defmacro __before_compile__(_env) do
    quote do 
      def run do 
        Enum.each @tests, fn name ->
          IO.puts "Running #{name}"
          apply(__MODULE__, name, [])
        end
      end
    end 
  end
end

