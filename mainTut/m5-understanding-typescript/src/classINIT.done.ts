class Department {
  //   always have to assing a value to properties if not done in constructor
  //   describing properties just to get it initialized in contructor is tedious check `line 9`
  //   name: string;
  //   id: string;
  // making the property private which makes it accessible only from inside the class
  // public is default
  private employees: string[] = [];
  constructor(private id: string, public name: string) {}
  //  telling that describe can only be called on a
  // object extanciating Department class
  describe(this: Department) {
    //   getting id and name they are just passed to constructor to get initialized
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  getEmployeeDetails(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
// extanciating the class object
const accounting = new Department("dept00110231", "accounting");
accounting.describe();
accounting.addEmployee("Rudra");
accounting.addEmployee("Rudrava");
// this behaviour is not intended but is possible as employees arr is public
// check line 4 now this line below wont work as employee is private and only accessible from
// inside the class
// accounting.employees.push("SUS");
accounting.getEmployeeDetails();

// creating a dummy object with describe property
let copy = { describe: accounting.describe };
// this would be undefined as describe needs a context of the object and the object does not have
// a context which has the property of name in it
// to type safe it check line 6
// after that this would give an error as copy obj and a extanciated object of Department
// does not have the same property
// copy.describe();

// to solve that we can just add a name property to copy which js due to its properties would think is a same object and would
// pass the type check
// const newcopy = { name: "HELO THIS IS A COPY", describe: accounting.describe };
// newcopy.describe();
