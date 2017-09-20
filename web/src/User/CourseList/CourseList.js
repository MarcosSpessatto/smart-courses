import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { subscribe } from './CourseListActions';
import Materialize from 'materialize-css';

class CourseList extends Component {

    constructor() {
        super();
        this.tableHeader = ['Id', 'Nome do curso', 'Início', 'Término', 'Professor', 'Modalidade', 'Área', 'Setor']
    }

    renderHeader() {
        return this
            .tableHeader
            .map(head => (
                <th>
                    {head}
                </th>
            ));
    }

    showBlockDialog() {
        Materialize.toast('Este curso estará bloqueado até que você conclua o anterior', 5000)
    }

    subscribe(course) {
        this.props.subscribe({
            course,
            employee: this.props.employee
        });
    }

    renderBody() {
        return this
            .props
            .recommendedCourses
            .map((course, index) => (
                <tr key={index}>
                    {
                        Object
                            .keys(course)
                            .map(key => (
                                <td>{course[key]}</td>
                            ))
                    }
                    {
                        index === 0 && !this.props.coursesInProgress.length
                            ?
                            <a
                                onClick={() => this.subscribe(course)}
                                class="waves-effect waves-light btn pulse">Inscrever</a>
                            :
                            <a class="btn red" onClick={this.showBlockDialog}>
                                <i class="material-icons">block</i>
                            </a>

                    }
                </tr>
            ))
    }

    hasCoursesToShow() {
        return Boolean(this.props.recommendedCourses.length);
    }

    render() {
        return (
            <div className="row">
                {
                    this
                        .hasCoursesToShow()
                        ?
                        <table className="responsive-table striped" >
                            <thead>
                                <tr>
                                    {
                                        this.renderHeader()
                                    }
                                    <th>Opções</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.renderBody()
                                }
                            </tbody>
                        </table >
                        :
                        this
                            .props
                            .userSearched
                            ?
                            <div class="col s12 m12" >
                                <div class="card horizontal">
                                    <div class="card-stacked">
                                        <div class="card-content">

                                            <h4>Nenhum curso recomendado.</h4>
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
    recommendedCourses: state.search.courses,
    userSearched: state.search.userSearched,
    coursesInProgress: state.search.coursesInProgress,
    employee: state.search.employee
});

const mapDispatchToProps = dispatch => bindActionCreators({
    subscribe
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CourseList)