package threadsafeSingleton;

public class Singleton {
    private static Singleton uniqueInstance;

    private Singleton() {}

    // thread safe singleton just has a "synchronized".
    public static synchronized Singleton getInstance() {
        if (uniqueInstance == null) {
            uniqueInstance = new Singleton();
        }
        return uniqueInstance;
    }

    public String getDescription() { return "I'm a thread safe Singleton!"; }

}
