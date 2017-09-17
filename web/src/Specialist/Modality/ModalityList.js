import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { getModalities, removeModality } from './ModalityActions';
import TableItems from '../../Common/Table/TableItems';

class ModalityList extends Component {

    constructor() {
        super();
        this.header = ['Id', 'Tipo'];
    }

    componentWillMount() {
        this.props.getModalities();
    }

    deleteItem(itemToRemove, index){
        this.props.removeModality(itemToRemove.id);
    }

    render() {
        return (
            <TableItems
                header={this.header}
                listData={this.props.modalities}
                onDelete={this.deleteItem.bind(this)}>
            </TableItems>
        );
    }
}

const mapStateToProps = state => ({
    modalities: state.modality.modalities
});

const mapDispatchToProps = dispatch => bindActionCreators({ getModalities, removeModality }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalityList);
