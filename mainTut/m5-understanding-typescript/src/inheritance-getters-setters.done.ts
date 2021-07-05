class Department {
  //   private readonly id: string;
  //   private name: string;
  // with private we cant access it from its child classes changing to protected
  // private employees: string[] = [];
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    //   the following cannot be done because id is read only
    // this.id = "helo";
    this.employees.push(employee);
  }
  getEmployeeDetails(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

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

  // method overriding
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

const it = new ITdepartment("dept69", ["Rudrava Mukherjee"]);
it.describe();
it.addEmployee("John Doe");
it.addEmployee("Jane Doe");
it.addEmployee("Rudrava Mukherjee");
it.getAdmins();
it.getEmployeeDetails();

const accounts = new AccountingDept("dept96", []);
accounts.describe();
accounts.addEmployee("charles babbage");
accounts.addEmployee("Brendon Eich");
accounts.addEmployee("SUS");
accounts.addEmployee("Rudrava Mukherjee");
accounts.getEmployeeDetails();
// accessing getter
console.log(accounts.lastReport);
// accessing setter
accounts.lastReport =
  "This is to say that rudrava mukherjee is greatest of all !!! maybe ???";
accounts.lastReport = "ok whatever smh!!!";
accounts.lastReport = "brendon eich agrees!!!";

accounts.printReports();
