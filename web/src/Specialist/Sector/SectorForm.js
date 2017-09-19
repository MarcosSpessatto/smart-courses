import Component from 'inferno-component';
import SubmitButton from '../../Common/Forms/SubmitButton';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { saveSector, changeValue } from './SectorActions';
import $ from 'jquery';


class SectorForm extends Component {

    componentDidMount() {
        this.initSelect();
    }

    componentDidUpdate() {
        this.initSelect();
    }

    initSelect() {
        $('select').material_select();
    }

    renderAreaOptions() {
        return this
            .props
            .areas
            .map(area => (
                <option
                    key={area.id}
                    value={area.id}>{area.name}</option>
            ));
    }

    saveSector(event) {
        event.preventDefault();
        this.props.saveSector(this.props.sector);
    }

    changeValue(event) {
        const actualState = this.props.sector;

        actualState[event.target.name] = event.target.value;
        this.props.changeValue(actualState);
    }

    showEmptyAreasMessage() {
        return <span>Você deve cadastrar <strong>áreas</strong> para poder cadastrar um setor.</span>
    }

    render() {
        return (
            <div className="row">
                {
                    this
                        .props
                        .areas
                        .length
                        ?
                        <form
                            className="col s12 m12"
                            onSubmit={this.saveSector.bind(this)}>

                            <div className="row">
                                <div className="input-field col s12 m12">
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={this.props.sector.name}
                                        onChange={this.changeValue.bind(this)}
                                        className="validate" />
                                    <label for="name">Nome</label>
                                </div>
                                <div className="input-field col s12 m12">
                                    <select
                                        onChange={this.changeValue.bind(this)}
                                        name="area">
                                        <option value="" disabled selected>Escolha a área</option>
                                        {
                                            this.renderAreaOptions()
                                        }
                                    </select>
                                    <label>Área do setor</label>
                                </div>
                                <SubmitButton
                                    text="Salvar"
                                    icon="send">
                                </SubmitButton>
                            </div>
                        </form>
                        :
                        this.showEmptyAreasMessage()
                }

            </div>
        );
    }
}

const mapStateToProps = state => ({
    sector: state.sector.sector,
    areas: state.area.areas
});

const mapDispatchToProps = dispatch => bindActionCreators({
    saveSector,
    changeValue
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SectorForm)