class Department {
    DepID:number;
    DepName:string;

    constructor(depID:number, depName:string){
        this.DepID = depID;
        this.DepName = depName;
    }

    showEmpDetails():void{
        `Department ID: ${this.DepID}
         Department Name: ${this.DepName}`
    }
}