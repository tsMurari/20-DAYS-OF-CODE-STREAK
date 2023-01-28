class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
    
    work() {
      console.log(`${this.name} is working.`);
    }
    
    getPaid() {
      console.log(`${this.name} has been paid ${this.salary}.`);
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
    
    work() {
      console.log(`${this.name} is managing the ${this.department} department.`);
    }
    
    assignTask(employee, task) {
      console.log(`${this.name} assigned ${task} to ${employee.name}.`);
      employee.work();
    }
  }
  
  const jim = new Employee("Jim", 50000);
  const pam = new Employee("Pam", 40000);
  const dwight = new Manager("Dwight", 100000, "Sales");
  
  dwight.assignTask(jim, "make sales call");
  dwight.assignTask(pam, "create a sales presentation");
  