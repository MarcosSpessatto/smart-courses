const moment = require('moment');

class Course {
    constructor(course){
        this.id = course.id;
        this.name = course.name;
        this.start = moment(course.start).format('DD/MM/YYYY');
        this.end = moment(course.end).format('DD/MM/YYYY');
        this.teacher = course.teacher;
        this.sector = course.sector;
        this.area = course.area;
        this.weight = course.weight;
        this.modality = course.modality;
    }
}

module.exports = Course;