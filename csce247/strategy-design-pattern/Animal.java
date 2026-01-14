package strategy;
import java.util.ArrayList;

/**
 * The abstract Animal class
 */
public abstract class Animal {
    protected String name;
    protected ArrayList<String> character;
    protected MoveBehavior moveBehavior;

    public Animal(String name) {
        this.name = name;
        this.character = new ArrayList<String>();
    }

    /**
     * Moves the animal forward
     */
    public void move() {
        moveBehavior.move();
    }

    @Override
    public String toString() {
        return name;
    }
    public void display() {
        for (String line : character) {
            System.out.println(line);
        }
    }
}
    }

    /**
     * Asks the user if they want to play again
     * 
     * @return true if they want to play again and false otherwise
     */
    private boolean playAgain() {
        System.out.print("Would you like to move another character? (y/n): ");
        String answer = reader.nextLine().toLowerCase().trim();
        return answer.equals(YES);
    }

    /**
     * Displays the list of characters
     * 
     * @param animals The list of animals
     */
    private void displayCharacters(ArrayList<Animal> animals) {
        System.out.println("Characters:");
        for (Animal animal : animals) {
            System.out.println("- " + animal.toString());
        }
    }
}

