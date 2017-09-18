import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { getCourses, removeCourse } from './CourseActions';
import TableItems from '../../Common/Table/TableItems';

class CourseList extends Component {

    constructor() {
        super();
        this.header = ['Id', 'Nome', 'Inicio', 'Fim', 'Modalidade'];
    }

    componentWillMount() {
        this.props.getCourses();
    }

    deleteItem(itemToRemove, index) {
        this.props.removeCourse(itemToRemove.id);
    }

    render() {
        return (
            <TableItems
                header={this.header}
                listData={this.props.courses}
                onDelete={this.deleteItem.bind(this)}>
            </TableItems>
        );
    }
}

const mapStateToProps = state => ({
    courses: state.course.courses
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getCourses,
    removeCourse
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
