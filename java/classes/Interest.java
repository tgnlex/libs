import java.util.Scanner;
public class Interest {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    Double principal;
    Double rate;
    Double interest; 
    System.out.println("Enter the principal.");
    principal = input.nextDouble();
    System.out.println("Enter the rate of interest.");
    rate = input.nextDouble();
    interest = principal * rate;
    principal = principal + interest;
    System.out.print("The interest value is: " + interest);
    input.close();
  }
}
