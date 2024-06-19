import java.util.Scanner;
public class WhitespaceRemover {
    public static void main(String[] args) {
      String text;
      Scanner input = new Scanner(System.in);
      System.out.println("Enter a string:");
      text = input.nextLine();
      text = text.replaceAll("\\s", "");
      System.out.println(text);
      input.close();
    }

}
