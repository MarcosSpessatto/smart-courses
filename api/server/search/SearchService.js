const DatabaseService = require('../db/service/DatabaseService');
const Employee = require('../employee/Employee');
const moment = require('moment');

class SearchService {
    constructor() {
        this.DatabaseService = new DatabaseService();
    }

    async searchUserByBadge(badge) {
        const convertToArrayIfNeeded = (items) => (!Array.isArray(items) ? [items] : items);

        const queryToGetEmployee = `select e.*, a.id as area from ia.employee e 
                                    inner join ia.sector s on s.id = e.sector
                                    inner join ia.area a on a.id = s.area
                                    where e.badge = ?`;

        const queryToGetEmployeeFinishedCourses = `select c.name from ia.course c
                                                    inner join ia.course_employee ce on ce.course = c.id
                                                    inner join ia.employee e on e.id = ce.employee
                                                    where e.badge = ? and ce.done = 1`;

        const queryToGetCoursesInProgress = `select c.name, c.id from ia.course c
                                            inner join ia.course_employee ce on ce.course = c.id
                                            inner join ia.employee e on e.id = ce.employee
                                            where ce.done = 0 and e.badge = ?`;

        const queryToSearchCourses = `select c.id, c.name as courseName, c.start, c.end, t.name as teacher,
                                        m.type as modality, s.name as sector, a.name as area from ia.course c
                                        inner join ia.teacher t on t.id = c.teacher
                                        inner join ia.modality m on m.id = c.modality
                                        left join ia.area a on a.id = c.area
                                        left join ia.sector s on s.id = c.sector
                                        where (s.id = ? or a.id = ?) 
                                        and c.id not in(select ce.course from ia.course_employee ce
                                                                inner join ia.employee e on e.id = ce.employee
                                                                where e.badge = ? and (ce.done = 1 or ce.validity < Now()))
                                        order by a.id, s.id, c.weight desc`;
        try {
            let result = await this.DatabaseService.execute(queryToGetEmployee, badge);
            const employee = new Employee(result);

            const coursesFinished = await this.DatabaseService.execute(queryToGetEmployeeFinishedCourses, badge);

            const coursesList = await this.DatabaseService.execute(queryToSearchCourses, [employee.sector, employee.area, badge]);

            const coursesInProgress = await this.DatabaseService.execute(queryToGetCoursesInProgress, badge);

            return {
                courses: coursesList.map(course => {
                    course.start = moment(course.start).format('DD/MM/YYYY');
                    course.end = moment(course.end).format('DD/MM/YYYY');

                    return course;
                }),
                employee,
                coursesFinished: convertToArrayIfNeeded(coursesFinished),
                coursesList: convertToArrayIfNeeded(coursesList),
                coursesInProgress: convertToArrayIfNeeded(coursesInProgress)
            }

        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = SearchService;
