import Component from 'inferno-component';
import SubmitButton from '../../Common/Forms/SubmitButton';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { saveModality, changeValue } from './ModalityActions';

class ModalityForm extends Component{

    saveModality(event) {
        event.preventDefault();
        this.props.saveModality(this.props.modality);
    }

    render() {
        return (
            <div className="row">
                <form
                    className="col s12 m12"
                    onSubmit={this.saveModality.bind(this)}>

                    <div className="row">
                        <div className="input-field col s12 m12">
                            <input
                                id="name"
                                type="text"
                                value={this.props.modality.type}
                                onChange={this.props.changeValue}
                                className="validate" />
                            <label for="name">Tipo da modalidade</label>
                        </div>
                        <SubmitButton></SubmitButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    modality: state.modality.modality
});

const mapDispatchToProps = dispatch => bindActionCreators({
    saveModality,
    changeValue
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalityForm)