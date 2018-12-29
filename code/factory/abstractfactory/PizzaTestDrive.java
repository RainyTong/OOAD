import static java.lang.System.*;

public class PizzaTestDrive {
    public static void main(String[] args) {
        PizzaStore chicagoStore = new ChicagoPizzaStore();

        Pizza pizza = chicagoStore.orderPizza("cheese");
        out.println("Joel ordered a " + pizza + "\n");


        pizza = chicagoStore.orderPizza("veggie");
        out.println("Joel ordered a " + pizza + "\n");
    }
}
