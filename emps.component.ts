class Employee {
    EmpID:number;
    EmpName:string;
    EmpAge:number;
    EmpCity:string; 

    constructor(empdID:number, empName:string, empAge:number, empCity:string){
        this.EmpID = empdID;
        this.EmpName = empName;
        this.EmpAge = empAge;
        this.EmpCity = empCity;
    }

    showEmpDetails():void{
        `Employee ID: ${this.EmpID}
         Employee Name: ${this.EmpName}
         Employee Age: ${this.EmpAge}
         Employee City: ${this.EmpCity}`
    }
}

