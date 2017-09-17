import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { getTeachers, removeTeacher } from './TeacherActions';
import TableItems from '../../Common/Table/TableItems';

class TeacherList extends Component {

    constructor() {
        super();
        this.header = ['Id', 'Nome'];
    }

    componentWillMount() {
        this.props.getTeachers();
    }

    deleteItem(itemToRemove, index) {
        this.props.removeTeacher(itemToRemove.id);
    }

    render() {
        return (
            <TableItems
                header={this.header}
                listData={this.props.teachers}
                onDelete={this.deleteItem.bind(this)}>
            </TableItems>
        );
    }
}

const mapStateToProps = state => ({
    teachers: state.teacher.teachers
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getTeachers,
    removeTeacher
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeacherList);
