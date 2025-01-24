package extras;

public abstract class ExtraFoodItem {
    protected double price;

    public abstract void selectOptions();

    public double calculatePrice() {
        return price;
    }

    public void printBill() {
        System.out.println("Extra Item Price: " + price);
    }
}
