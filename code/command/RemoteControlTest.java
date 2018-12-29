package simpleRemote;

// This is a client.
public class RemoteControlTest {
    public static void main(String[] args) {
        //Invoker:
        SimpleRemoteControl remote = new SimpleRemoteControl();
        //Receiver:
        Light light = new Light();
//        GarageDoor garageDoor = new GarageDoor();
        //Command:
        LightOnCommand lightOn = new LightOnCommand(light);
//        GarageDoorOpenCommand garageOpen = new GarageDoorOpenCommand(garageDoor);

        remote.setCommand(lightOn);
        remote.buttonWasPressed();
//        remote.setCommand(garageOpen);
//        remote.buttonWasPressed();
    }
}
