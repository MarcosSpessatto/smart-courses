import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { getSectors, removeSector } from './SectorActions';
import TableItems from '../../Common/Table/TableItems';

class SectorList extends Component {

    constructor() {
        super();
        this.header = ['Id', 'Nome', 'Área'];
    }

    componentWillMount() {
        this.props.getSectors();
    }

    deleteItem(itemToRemove, index){
        this.props.removeSector(itemToRemove.id);
    }

    render() {
        return (
            <TableItems
                header={this.header}
                listData={this.props.sectors}
                onDelete={this.deleteItem.bind(this)}>
            </TableItems>
        );
    }
}

const mapStateToProps = state => ({
    sectors: state.sector.sectors
});

const mapDispatchToProps = dispatch => bindActionCreators({ getSectors, removeSector }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SectorList);
