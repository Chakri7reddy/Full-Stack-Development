package extras;

import java.util.Scanner;

public class Sides extends ExtraFoodItem {
    public Sides() {
        price = 70.0;
    }

    @Override
    public void selectOptions() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Select Side:");
        System.out.println("1. Fries");
        System.out.println("2. Garlic Bread");
        System.out.println("3. Salad");
        int choice = scanner.nextInt();
        scanner.nextLine(); // consume newline

        switch (choice) {
            case 1:
                price = 70.0;
                break;
            case 2:
                price = 80.0;
                break;
            case 3:
                price = 50.0;
                break;
            default:
                System.out.println("Invalid choice");
        }
    }
}
