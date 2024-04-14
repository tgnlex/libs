import java.util.Scanner;
class Calculator {
  public static void main(String[] args) {

    char operator;
    Double number1, number2, result;
    Scanner input = new Scanner(System.in);
    System.out.println("Choose an operator: +, -, *, or /");
    // Get input token, 
    // return the first char in index
    operator = input.next().charAt(0);
    System.out.println("Enter first number");
    number1 = input.nextDouble();
    System.out.println("Enter second number");
    number2 = input.nextDouble();
    switch (operator) {
      case '+':
        result = number1 + number2;
        System.out.println(result);
        break;
      case '-':
        result = number1 - number2;
        System.out.println(result);
        break;
      case '*':
        result = number1 * number2;
        System.out.println(result);
        break;
      case '/':
        result = number1 / number2;
        System.out.println(result);
        break; 
    }
    input.close();
  }
}
