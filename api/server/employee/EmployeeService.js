const Employee = require('./Employee');
const DatabaseService = require('../db/service/DatabaseService');

class EmployeeService {
    constructor() {
        this.DatabaseService = new DatabaseService();
    }

    async getAll() {
        try {
            const query = 'select e.* from ia.employee e order by e.id asc';
            const employees = await this.DatabaseService.execute(query);

            if (!Array.isArray(employees))
                return [new Employee(employees)];

            return employees.map(employee => new Employee(employee));

        } catch (error) {
            throw error;
        }

    }

    async getById(employeeId) {
        const query = 'select * from ia.employee where id = ?';
        try {
            const employee = await this.DatabaseService.execute(query, employeeId);

            return new Employee(employee);
        }
        catch (error) {
            throw error;
        }
    }

    async insert(employee) {
        const queryToSaveEmploye = 'Insert into ia.employee Set ?';
        const queryToSaveEmployeeAndSector = 'Insert into ia.employee_sector Set ?';
        const employeeToSave = {
            name: employee.name,
            function: employee.function,
            badge: employee.badge
        };

        try {
            const result = await this.DatabaseService.execute(queryToSaveEmploye, employeeToSave);
            employee.id = result.insertId;

            const employeeAndSector = {
                employee: employee.id,
                sector: parseInt(employee.sector)
            }

            await this.DatabaseService.execute(queryToSaveEmployeeAndSector, employeeAndSector)

            return new Employee(employee);
        }
        catch (error) {
            throw error;
        }
    }

    async update(employee) {
        const query = 'Update ia.employee Set ? where id = ?';
        try {
            await this.DatabaseService.execute(query, [employee, employee.id]);

            return new Employee(employee);
        }
        catch (error) {
            throw error;
        }
    }

    async delete(employeeId) {
        const queryToDeleteEmployeeSector = 'delete from ia.employee_sector where employee = ?';
        const queryToDeleteEmployee = 'delete from ia.employee where id = ?';
        try {
            await this.DatabaseService.execute(queryToDeleteEmployeeSector, employeeId);
            await this.DatabaseService.execute(queryToDeleteEmployee, employeeId);

            return employeeId;
        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = EmployeeService;
