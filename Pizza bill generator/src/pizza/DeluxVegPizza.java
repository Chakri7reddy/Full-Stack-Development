package pizza;

import java.util.Scanner;

public class DeluxVegPizza extends Pizza {
    public DeluxVegPizza() {
        basePrice = 200.0;
        extraCheese = true;
        extraToppings = true;
    }

    @Override
    public void selectOptions() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Opt for Take Away? (yes/no)");
        if (scanner.nextLine().equalsIgnoreCase("yes")) takeAway = true;
    }
}
