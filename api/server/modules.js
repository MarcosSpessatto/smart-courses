const AreaRoutes = require('./area/AreaRoutes');
const EmployeeRoutes = require('./employee/EmployeeRoutes');
const ModalityRoutes = require('./modality/ModalityRoutes');
const SectorRoutes = require('./sector/SectorRoutes');
const TeacherRoutes = require('./teacher/TeacherRoutes');
const CourseRoutes = require('./course/CourseRoutes');

module.exports = (router) => {
    new AreaRoutes(router);
    new EmployeeRoutes(router);
    new ModalityRoutes(router);
    new SectorRoutes(router);
    new TeacherRoutes(router);
    new CourseRoutes(router);

    return router;
};
