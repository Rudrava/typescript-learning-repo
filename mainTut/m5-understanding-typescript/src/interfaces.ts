// cant have  a initailizer
// can be said is a skeleton or a type

// we would wanna use interfaces if we are mentioning a object's type as it is easier and clear
// also we can use interfaces to implement classes
// type Person = {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// };

// let user1: Person;
// user1 = {
//   name: "John",
//   age: 20,
//   greet(phrase) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("helo");

type Foods = "vegetarian" | "non-vegitarian";

// a bit like abstract class but without any implementation details
// the only access modifiers can be used with inteface or even a type is READONLY
// we can also extend intefaces like inheritance but the diff is we can inherit from multiple interfaces
interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}

interface Eater {
  readonly foodType: Foods;
  //   optional params | properties
  hand?: string;
  eat(): void;
}

// implementing 2 intefaces with a class
class Person implements Greetable, Eater {
  // adding
  constructor(public name: string, public foodType: Foods) {}
  eat() {
    console.log("Yo chill im eating, im a " + this.foodType);
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

// implementing a object with same interface
let user: Greetable = {
  name: "Rudrava",
  greet(phrase) {
    console.log(phrase + " " + this.name);
  },
};

// cant change name as it is readonly
// user.name = "Mario";

console.log(user);

const person = new Person("Rudraava", "non-vegitarian");
console.log(person);
person.eat();
person.greet("Helo I am");
