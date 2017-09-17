import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import ModalButton from '../../Common/Modal/ModalButton';
import '../../main/App.css';
import './CardItem.css';

class CardItem extends Component {

    getQuantityOfItems() {
        return this.props[this.props.name][`${this.props.name}Length`];
    }

    render() {
        return (
            <div className="col s12 m4">
                <div className="card accent-color darken-1">
                    <div className="card-content white-text card-border">
                        <span className="card-title">{this.props.title}</span>
                        <p>Total de {this.props.title}: {this.getQuantityOfItems()}</p>
                    </div>
                    <div className="card-action">
                        <ModalButton
                            title="Listagem"
                            name={`${this.props.name}-list`}>
                        </ModalButton>
                        <ModalButton
                            title="Adicionar"
                            name={`${this.props.name}-add`}>
                        </ModalButton>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    area: state.area,
    modality: state.modality,
    sector: state.sector
});

export default connect(mapStateToProps)(CardItem);
