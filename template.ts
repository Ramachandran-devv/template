// Defer the exact steps of an algorithm to a subclass
// The Template Method design pattern is a behavioral design pattern that defines the skeleton of an algorithm 
// in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
//  This pattern is particularly useful when multiple subclasses need to implement a common method with the same sequence of steps,
//  but the details of one or more steps in the sequence may differ

abstract class WorkDay {
    // The template method defines the skeleton of an algorithm.
    public templateMethod(): void {
        this.wakeUp();
        this.eatBreakfast();
        this.goToWork();
        this.work();
        this.returnHome();
        this.relax();
        this.sleep();
    }

    protected wakeUp(): void {
        console.log("Wake up in the morning.");
    }

    protected eatBreakfast(): void {
        console.log("Have breakfast.");
    }

    protected goToWork(): void {
        console.log("Commute to work.");
    }

    // The 'work' method is abstract and must be implemented by subclasses.
    protected abstract work(): void;

    protected returnHome(): void {
        console.log("Return home.");
    }

    protected relax(): void {
        console.log("Relax in the evening.");
    }

    protected sleep(): void {
        console.log("Go to sleep.");
    }
}

class SoftwareDeveloper extends WorkDay {
    protected work(): void {
        console.log("Write code and fix bugs.");
    }
}

class Teacher extends WorkDay {
    protected work(): void {
        console.log("Teach students.");
    }
}

// Client code
function clientCode(day: WorkDay): void {
    // The client calls the template method to execute the algorithm.
    day.templateMethod();
}

const developerDay = new SoftwareDeveloper();
const teacherDay = new Teacher();

clientCode(developerDay);
clientCode(teacherDay);
