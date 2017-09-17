import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { getEmployees, removeEmployee } from './EmployeeActions';
import TableItems from '../../Common/Table/TableItems';

class SectorList extends Component {

    constructor() {
        super();
        this.header = ['Id', 'Nome', 'Crachá', 'Bloqueado'];
    }

    componentWillMount() {
        this.props.getEmployees();
    }

    deleteItem(itemToRemove, index) {
        this.props.removeEmployee(itemToRemove.id);
    }

    render() {
        return (
            <TableItems
                header={this.header}
                listData={this.props.employees}
                onDelete={this.deleteItem.bind(this)}>
            </TableItems>
        );
    }
}

const mapStateToProps = state => ({
    employees: state.employee.employees
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getEmployees,
    removeEmployee
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SectorList);
