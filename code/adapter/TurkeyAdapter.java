package duck;
import java.util.Random;

//TurkeyAdapter tries to pretend a turkey as a duck!

public class TurkeyAdapter implements Duck{

    Turkey turkey;
    Random rand;

    public TurkeyAdapter(Turkey turkey) {
        this.turkey = turkey;
        rand = new Random();
    }

    public void quack() {
        turkey.gobble();
    }

    public void fly() {
        if(rand.nextInt(5) == 0) {
            turkey.fly();
        }
    }

}
