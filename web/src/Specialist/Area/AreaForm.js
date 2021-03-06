import Component from 'inferno-component';
import SubmitButton from '../../Common/Forms/SubmitButton';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { saveArea, changeValue } from './AreaActions';


class AreaForm extends Component {

    saveArea(event) {
        event.preventDefault();
        this.props.saveArea(this.props.area);
    }

    render() {
        return (
            <div className="row">
                <form
                    className="col s12 m12"
                    onSubmit={this.saveArea.bind(this)}>

                    <div className="row">
                        <div className="input-field col s12 m12">
                            <input
                                id="name"
                                type="text"
                                value={this.props.area.name}
                                onChange={this.props.changeValue}
                                className="validate" />
                            <label for="name">Nome</label>
                        </div>
                        <SubmitButton
                            text="Salvar"
                            icon="send">
                        </SubmitButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    area: state.area.area
});

const mapDispatchToProps = dispatch => bindActionCreators({
    saveArea,
    changeValue
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AreaForm)