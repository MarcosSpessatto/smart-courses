import { combineReducers } from 'redux';

import DialogReducers from '../Common/Dialog/DialogReducers';

import AreaReducers from '../Specialist/Area/AreaReducers';
import ModalityReducers from '../Specialist/Modality/ModalityReducers';
import SectorReducers from '../Specialist/Sector/SectorReducers';
import TeacherReducers from '../Specialist/Teacher/TeacherReducers';
import EmployeeReducers from '../Specialist/Employee/EmployeeReducers';
import CourseReducers from '../Specialist/Course/CourseReducers';
import SearchCoursesReducers from '../User/Search/SearchCoursesReducers';
import LoadingReducers from '../Common/Loading/LoadingReducers';

const rootReducer = combineReducers({
    area: AreaReducers,
    dialog: DialogReducers,
    modality: ModalityReducers,
    sector: SectorReducers,
    teacher: TeacherReducers,
    employee: EmployeeReducers,
    course: CourseReducers,
    search: SearchCoursesReducers,
    loading: LoadingReducers
});

export default rootReducer;