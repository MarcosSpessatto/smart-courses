const Course = require('./Course');
const DatabaseService = require('../db/service/DatabaseService');
const moment = require('moment');

class CourseService {
    constructor() {
        this.DatabaseService = new DatabaseService();
    }

    async getAll() {
        try {
            const query = `select c.id, c.name, c.start, c.end, m.type as modality from ia.course c
                            inner join ia.modality m on m.id = c.modality
                            order by c.id asc`;

            const courses = await this.DatabaseService.execute(query);

            if (!Array.isArray(courses))
                return [new Course(courses)];

            return courses.map(course => new Course(course));

        } catch (error) {
            throw error;
        }

    }

    async getById(courseId) {
        const query = 'select * from ia.employee where id = ?';
        try {
            const course = await this.DatabaseService.execute(query, courseId);

            return new Course(course);
        }
        catch (error) {
            throw error;
        }
    }

    async insert(course) {
        const query = 'Insert into ia.course Set ?';
        if (!course.area)
            delete course.area;
        else
            delete course.sector;

        try {
            const result = await this.DatabaseService.execute(query, course);

            course.id = result.insertId;


            return new Course(course);
        }
        catch (error) {
            throw error;
        }
    }

    async update(course) {
        const query = 'Update ia.course Set ? where id = ?';
        try {
            await this.DatabaseService.execute(query, [course, course.id]);

            return new Course(course);
        }
        catch (error) {
            throw error;
        }
    }

    async finalize(course, employee) {
        const query = 'Update ia.course_employee Set ? where course = ? and employee = ?';
        try {
            await this.DatabaseService.execute(query, [{ done: 1, validity: moment().add(1, 'year').format('YYYY-MM-DD') }, course.id, employee.id]);

            return course;
        }
        catch (error) {
            throw error;
        }
    }

    async subscribe(course, employee) {
        const query = 'Insert into ia.course_employee Set ?';
        try {
            await this.DatabaseService.execute(query, {
                course: course.id,
                employee: employee.id,
                done: 0
            });

            return course;
        }
        catch (error) {
            throw error;
        }
    }

    async delete(courseId) {
        const query = 'delete from ia.course where id = ?';
        try {
            const verifyCoursesEmployee = 'select * from ia.course_employee where course = ?';

            let coursesEmployee = await this.DatabaseService.execute(verifyCoursesEmployee, courseId);
            coursesEmployee = Array.isArray(coursesEmployee) ? coursesEmployee : [coursesEmployee];
            if (coursesEmployee.length)
                throw new Error('O registro possui registros filhos')
            else
                await this.DatabaseService.execute(query, courseId);

            return courseId;
        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = CourseService;
