package pizza;

import java.util.Scanner;

public class VegPizza extends Pizza {
    public VegPizza() {
        basePrice = 100.0;
    }

    @Override
    public void selectOptions() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Add Extra Cheese? (yes/no)");
        if (scanner.nextLine().equalsIgnoreCase("yes")) extraCheese = true;
        System.out.println("Add Extra Toppings? (yes/no)");
        if (scanner.nextLine().equalsIgnoreCase("yes")) extraToppings = true;
        System.out.println("Opt for Take Away? (yes/no)");
        if (scanner.nextLine().equalsIgnoreCase("yes")) takeAway = true;
    }
}
