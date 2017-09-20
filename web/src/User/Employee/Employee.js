import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { finalizeCourse } from './EmployeeActions';

import './Employee.css';

class Employee extends Component {

    showEmployeeInfo() {
        return Boolean(this.props.employee.id) && this.props.userSearched;
    }

    renderFinishedCourses() {
        return (
            <ul>
                {
                    this
                        .props
                        .coursesFinished
                        .map((course, index) => (
                            <li key={index}>
                                {course.name}
                            </li>
                        ))
                }
            </ul>
        );
    }

    finalizeCourse(course, employee){
        this.props.finalizeCourse({
            course,
            employee
        })
    }

    renderCoursesInProgress() {
        return (
            <ul>
                {
                    this
                        .props
                        .coursesInProgress
                        .map((course, index) => (
                            <li key={index}>
                                {course.name}
                                <button
                                    onClick={() => this.finalizeCourse(course, this.props.employee)}
                                    className="waves-effect waves-light btn pulse margin-left">Concluir
                                </button>
                            </li>
                        ))
                }
            </ul>
        );
    }

    render() {
        return (
            <div>
                {
                    this
                        .showEmployeeInfo()
                        ?
                        <div className="col s12 m12" >
                            <h4 className="header">{this.props.employee.name}</h4><strong>
                                <h5>Função: </h5></strong><p>{this.props.employee.function}</p>
                            <div className="card horizontal">
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <strong>Cursos concluídos</strong>
                                        {
                                            this
                                                .renderFinishedCourses()
                                        }
                                    </div>
                                    <strong>Cursos em andamento</strong>
                                    <div>
                                        {
                                            this
                                                .renderCoursesInProgress()
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        ''
                }
            </div>
        );
    }

}
const mapStateToProps = state => ({
    employee: state.search.employee,
    userSearched: state.search.userSearched,
    coursesFinished: state.search.coursesFinished,
    coursesInProgress: state.search.coursesInProgress
});

const mapDispatchToProps = dispatch => bindActionCreators({
    finalizeCourse
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Employee)