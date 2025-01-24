package pizza;

import java.util.Scanner;

public abstract class Pizza {
    protected double basePrice;
    protected double extraCheesePrice = 20.0;
    protected double extraToppingsPrice = 30.0;
    protected double packagingCharges = 10.0;
    protected boolean extraCheese = false;
    protected boolean extraToppings = false;
    protected boolean takeAway = false;

    public abstract void selectOptions();

    public double calculatePrice() {
        double totalPrice = basePrice;
        if (extraCheese) totalPrice += extraCheesePrice;
        if (extraToppings) totalPrice += extraToppingsPrice;
        if (takeAway) totalPrice += packagingCharges;
        return totalPrice;
    }

    public void printBill() {
        System.out.println("Base Price: " + basePrice);
        if (extraCheese) System.out.println("Extra Cheese: " + extraCheesePrice);
        if (extraToppings) System.out.println("Extra Toppings: " + extraToppingsPrice);
        if (takeAway) System.out.println("Packaging Charges: " + packagingCharges);
    }
}
