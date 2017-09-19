import Component from 'inferno-component';
import SearchCourses from '../Search/SearchCourses';
import CourseList from '../CourseList/CourseList';
import Employee from '../Employee/Employee';

class UserBox extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col m3 s3">
                        <SearchCourses></SearchCourses>
                    </div>
                    <div className="col m9 s9">
                        <Employee></Employee>
                    </div>
                </div>
                <div className="row">
                    <div className="col m12 s12">
                        <CourseList></CourseList>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserBox;
