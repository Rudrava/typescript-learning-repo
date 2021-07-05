class Department {
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}

  // static properties
  static readonly fiscalYear: string = "2020";

  // static methods = methods that can be used without extanciating the class object
  static createEmployee(name: string) {
    return { id: Math.round(Math.random() * 100000), name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
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
}

// ====ACCOUNTING DEPT
class AccountingDept extends Department {
  private recentReport: string;

  get lastReport() {
    if (this.recentReport) return this.recentReport;
    throw new Error("No reports found!");
  }
  set lastReport(report: string) {
    console.log({ report });
    if (report) this.addReport(report);
    else throw new Error("please enter a valid report");
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.recentReport = reports[0];
  }

  addEmployee(name: string) {
    if (name.toLowerCase() === "sus") {
      console.log("SUS is banned from accounting dept!!!");
    }
    this.employees.push(name);
  }

  private addReport(report: string) {
    this.reports.push(report);
  }
  printReports() {
    this.reports.forEach((report) => console.log({ report: report }));
  }
}

// accessing static properties
console.log(Department.fiscalYear);
// accessing static methods without extanciation of object
console.log(Department.createEmployee("Rudrava Mukherjee"));
