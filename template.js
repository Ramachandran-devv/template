// Defer the exact steps of an algorithm to a subclass
// The Template Method design pattern is a behavioral design pattern that defines the skeleton of an algorithm 
// in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
//  This pattern is particularly useful when multiple subclasses need to implement a common method with the same sequence of steps,
//  but the details of one or more steps in the sequence may differ
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WorkDay = /** @class */ (function () {
    function WorkDay() {
    }
    // The template method defines the skeleton of an algorithm.
    WorkDay.prototype.templateMethod = function () {
        this.wakeUp();
        this.eatBreakfast();
        this.goToWork();
        this.work();
        this.returnHome();
        this.relax();
        this.sleep();
    };
    WorkDay.prototype.wakeUp = function () {
        console.log("Wake up in the morning.");
    };
    WorkDay.prototype.eatBreakfast = function () {
        console.log("Have breakfast.");
    };
    WorkDay.prototype.goToWork = function () {
        console.log("Commute to work.");
    };
    WorkDay.prototype.returnHome = function () {
        console.log("Return home.");
    };
    WorkDay.prototype.relax = function () {
        console.log("Relax in the evening.");
    };
    WorkDay.prototype.sleep = function () {
        console.log("Go to sleep.");
    };
    return WorkDay;
}());
var SoftwareDeveloper = /** @class */ (function (_super) {
    __extends(SoftwareDeveloper, _super);
    function SoftwareDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoftwareDeveloper.prototype.work = function () {
        console.log("Write code and fix bugs.");
    };
    return SoftwareDeveloper;
}(WorkDay));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.work = function () {
        console.log("Teach students.");
    };
    return Teacher;
}(WorkDay));
// Client code
function clientCode(day) {
    // The client calls the template method to execute the algorithm.
    day.templateMethod();
}
var developerDay = new SoftwareDeveloper();
var teacherDay = new Teacher();
clientCode(developerDay);
clientCode(teacherDay);
//# sourceMappingURL=template.js.map