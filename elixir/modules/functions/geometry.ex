defmodule Geometry do
  defmodule Rectangle do 
    @moduledoc "Implements basic rectangle functions"
    
    @doc "Computes area of a rectangle"
    @spec area(number) :: number 
    def area(a, b) do
      a * b
    end
    
    @doc "Computes perimeter of a rectangle."
    @spec perimeter(number) :: number
    def perimeter(a, b) do 
      (2 * a) + (2 * b)
    end
  end
  
  defmodule Circle do
    @moduledoc "Implements basic circle functions"
    @pi 3.14159

    @doc "Computes circumference of a circle."
    @spec circumference(number) :: number 
    def circumference(d) do 
      d*pi
    end 
    
    @doc "Computes area of a circle."
    @spec area(number) :: number
    def area(r) do
      pi*(r*r) 
    end
  end
end