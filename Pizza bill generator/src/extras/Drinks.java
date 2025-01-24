package extras;

import java.util.Scanner;

public class Drinks extends ExtraFoodItem {
    public Drinks() {
        price = 50.0;
    }

    @Override
    public void selectOptions() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Select Drink:");
        System.out.println("1. Cola");
        System.out.println("2. Juice");
        System.out.println("3. Water");
        int choice = scanner.nextInt();
        scanner.nextLine(); // consume newline

        switch (choice) {
            case 1:
                price = 50.0;
                break;
            case 2:
                price = 60.0;
                break;
            case 3:
                price = 30.0;
                break;
            default:
                System.out.println("Invalid choice");
        }
    }
}
