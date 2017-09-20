const Teacher = require('./Teacher');
const DatabaseService = require('../db/service/DatabaseService');

class TeacherService {
    constructor() {
        this.DatabaseService = new DatabaseService();
    }

    async getAll() {
        try {
            const query = 'select t.* from ia.teacher t order by t.name desc';
            const teachers = await this.DatabaseService.execute(query);

            if (!Array.isArray(teachers))
                return [new Teacher(teachers)];

            return teachers.map(teacher => new Teacher(teacher));

        } catch (error) {
            throw error;
        }

    }

    async getById(teacherId) {
        const query = 'select * from ia.teacher where id = ?';
        try {
            const teacher = await this.DatabaseService.execute(query, teacherId);

            return new Teacher(teacher);
        }
        catch (error) {
            throw error;
        }
    }

    async insert(teacher) {
        const query = 'Insert into ia.teacher Set ?';
        try {
            const result = await this.DatabaseService.execute(query, teacher);

            teacher.id = result.insertId;

            return new Teacher(teacher);
        }
        catch (error) {
            throw error;
        }
    }

    async update(teacher) {
        const query = 'Update ia.teacher Set ? where id = ?';
        try {
            await this.DatabaseService.execute(query, [teacher, teacher.id]);

            return new Teacher(teacher);
        }
        catch (error) {
            throw error;
        }
    }

    async delete(teacherId) {
        const query = 'delete from ia.teacher where id = ?';
        try {
            const verifyCourses = 'select * from ia.course where teacher = ?';

            let courses = await this.DatabaseService.execute(verifyCourses, teacherId);
            courses = Array.isArray(courses) ? courses : [courses];

            if (courses.length)
                throw new Error('O registro possui registros filhos')
            else
                await this.DatabaseService.execute(query, teacherId);

            return teacherId;
        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = TeacherService;
