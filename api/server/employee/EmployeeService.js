const Employee = require('./Employee');
const DatabaseService = require('../db/service/DatabaseService');

class EmployeeService {
    constructor() {
        this.DatabaseService = new DatabaseService();
    }

    async getAll() {
        try {
            const query = `select e.id, e.name, e.function, e.badge, s.name as sector, a.name as area from ia.employee e
                            inner join ia.sector s on s.id = e.sector
                            inner join ia.area a on a.id = s.area
                            order by e.id asc`;
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

        try {
            const result = await this.DatabaseService.execute(queryToSaveEmploye, employee);
            employee.id = result.insertId;

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
        const query = 'delete from ia.employee where id = ?';
        try {
            await this.DatabaseService.execute(query, employeeId);

            return employeeId;
        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = EmployeeService;
