package duck;

//I have a turkey and a TurkeyAdapter, and I want the turkey to act as a duck!

public class DuckTestDrive {

    public static void main(String[] args) {
        WildTurkey turkey = new WildTurkey();
        TurkeyAdapter turkeyAdapter = new TurkeyAdapter(turkey);

        for (int i=0; i<10; i++) {
            System.out.println("The TurkeyAdapter says...");
            turkeyAdapter.quack();
            turkeyAdapter.fly();
        }
    }

}
