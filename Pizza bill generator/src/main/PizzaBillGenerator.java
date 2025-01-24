package main;

import extras.*;
import java.util.Scanner;
import pizza.*;

public class PizzaBillGenerator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Pizza pizza = null;
        ExtraFoodItem extraItem = null;

        System.out.println("Select Pizza Type:");
        System.out.println("1. Veg Pizza");
        System.out.println("2. Non-Veg Pizza");
        System.out.println("3. Delux Veg Pizza");
        System.out.println("4. Delux Non-Veg Pizza");
        int pizzaChoice = scanner.nextInt();
        scanner.nextLine(); // consume newline

        switch (pizzaChoice) {
            case 1 -> pizza = new VegPizza();
            case 2 -> pizza = new NonVegPizza();
            case 3 -> pizza = new DeluxVegPizza();
            case 4 -> pizza = new DeluxNonVegPizza();
            default -> {
                System.out.println("Invalid choice");
                System.exit(0);
            }
        }

        pizza.selectOptions();

        System.out.println("Do you want to add extra food items? (yes/no)");
        if (scanner.nextLine().equalsIgnoreCase("yes")) {
            System.out.println("Select Extra Food Item:");
            System.out.println("1. Drinks");
            System.out.println("2. Sides");
            int extraChoice = scanner.nextInt();
            scanner.nextLine(); // consume newline

            switch (extraChoice) {
                case 1 -> extraItem = new Drinks();
                case 2 -> extraItem = new Sides();
                default -> System.out.println("Invalid choice");
            }

            if (extraItem != null) {
                extraItem.selectOptions();
            }
        }

        double totalBill = pizza.calculatePrice();
        if (extraItem != null) {
            totalBill += extraItem.calculatePrice();
        }

        System.out.println("\n--- Bill Details ---");
        pizza.printBill();
        if (extraItem != null) {
            extraItem.printBill();
        }
        System.out.println("Total Price: " + totalBill);
    }
}
