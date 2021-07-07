abstract class Department {
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}

  // static properties
  static readonly fiscalYear: string = "2020";

  // static methods = methods that can be used without extanciating the class object
  static createEmployee(name: string) {
    return { id: Math.round(Math.random() * 100000), name };
  }

  abstract describe(this: Department): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  getEmployeeDetails(this: Department) {
    if (this.employees.length === 0) throw new Error("No employees");
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// ====IT DEPT
class ITdepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "Informatics and tech");
    this.admins = admins;
  }

  getAdmins() {
    console.log(this.admins);
  }
  // as the base class has abstract methods for
  // which we have to implement them on every class that implements
  describe() {
    console.log("IT dept - id: " + this.id);
  }
}

// ====ACCOUNTING DEPT
class AccountingDept extends Department {
  private recentReport: string;
  private static instance: AccountingDept;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.recentReport = reports[0];
  }

  static getInstance(id: string, reports: string[]): AccountingDept {
    if (this.instance == null) return new AccountingDept(id, reports);
    return this.instance;
  }

  get lastReport() {
    if (this.recentReport) return this.recentReport;
    throw new Error("No reports found!");
  }
  set lastReport(report: string) {
    console.log({ report });
    if (report) this.addReport(report);
    else throw new Error("please enter a valid report");
  }

  addEmployee(name: string) {
    if (name.toLowerCase() === "sus") {
      console.log("SUS is banned from accounting dept!!!");
    }
    this.employees.push(name);
  }

  // overloading
  describe() {
    console.log("Accounting dept - id: " + this.id);
  }

  private addReport(report: string) {
    this.reports.push(report);
  }
  printReports() {
    this.reports.forEach((report) => console.log({ report: report }));
  }
}

// // accessing static properties
// console.log(Department.fiscalYear);
// // accessing static methods without extanciation of object
// console.log(Department.createEmployee("Rudrava Mukherjee"));
// const accounting = new AccountingDept("dept00110231", []);
// invoking overloaded function
// abstracted method
// accounting.describe();

// ======SINGLETONS
// cant be instanciated as the constructor is private
const accounting = AccountingDept.getInstance("dept00110231", []);
accounting.describe();
const accounting2 = AccountingDept.getInstance("dept00110231", []);
// both are same as only one instance of Accounting class can be extanciated
console.log(accounting, accounting2);
