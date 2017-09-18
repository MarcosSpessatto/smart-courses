class Employee {
    constructor(employee){
        this.id = employee.id;
        this.name = employee.name;
        this.function = employee.function;
        this.blocked = employee.blocked === 1 ? 'Sim' : 'Não' ;
        this.badge = employee.badge;
        this.sector = employee.sector;
        this.area = employee.area;
    }
}

module.exports = Employee;