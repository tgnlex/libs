defmodule Geometry do
  defmodule Rectangle do
    @spec area(number) :: number
    def area(a, b) do
      a * b
    end
    @spec perimeter(number) :: number
    def perimeter(a, b) do
      (2 * a) + (2 * b)
    end
  end
  defmodule Circle do
    @pi 3.14159
    @spec circumference(number) :: number
    def circumference(d) do
      d*pi
    end

    @spec area(number) :: number
    def area(r) do
      pi*(r*r)
    end
  end
end
