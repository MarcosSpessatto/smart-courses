import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { getAreas, removeArea } from './AreaActions';
import TableItems from '../../Common/Table/TableItems';

class AreaList extends Component {

    constructor() {
        super();
        this.header = ['Id', 'Nome'];
    }

    componentWillMount() {
        this.props.getAreas();
    }

    deleteItem(itemToRemove, index){
        this.props.removeArea(itemToRemove.id);
    }

    render() {
        return (
            <TableItems
                header={this.header}
                listData={this.props.areas}
                onDelete={this.deleteItem.bind(this)}>
            </TableItems>
        );
    }
}

const mapStateToProps = state => ({
    areas: state.area.areas
});

const mapDispatchToProps = dispatch => bindActionCreators({ getAreas, removeArea }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AreaList);
