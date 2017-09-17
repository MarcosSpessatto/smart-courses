import Component from 'inferno-component';
import SubmitButton from '../../Common/Forms/SubmitButton';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { saveEmployee, changeValue } from './EmployeeActions';
import $ from 'jquery';


class EmployeeForm extends Component {

    componentDidMount() {
        this.initSelect();
    }

    componentDidUpdate() {
        this.initSelect();
    }

    initSelect() {
        $('select').material_select();
    }

    saveEmployee(event) {
        event.preventDefault();
        this.props.saveEmployee(this.props.employee);
    }

    showEmptySectorsMessage() {
        return <span>Você deve cadastrar <strong>setores</strong> para poder cadastrar um funcionário.</span>
    }

    changeValue(event) {
        const actualState = this.props.employee;

        actualState[event.target.name] = event.target.value;
        this.props.changeValue(actualState);
    }

    renderSectorOptions() {
        return this
            .props
            .sectors
            .map(sector => (
                <option
                    key={sector.id}
                    value={sector.id}>{sector.name}</option>
            ));
    }

    render() {
        return (
            <div className="row">
                {
                    this
                        .props
                        .sectors
                        .length
                        ?
                        <form
                            className="col s12 m12"
                            onSubmit={this.saveEmployee.bind(this)}>

                            <div className="row">
                                <div className="input-field col s12 m12">
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={this.props.employee.name}
                                        onChange={this.changeValue.bind(this)}
                                        className="validate" />
                                    <label for="name">Nome</label>
                                </div>
                                <div className="input-field col s12 m12">
                                    <input
                                        id="name"
                                        type="text"
                                        name="function"
                                        value={this.props.employee.function}
                                        onChange={this.changeValue.bind(this)}
                                        className="validate" />
                                    <label for="name">Função</label>
                                </div>
                                <div className="input-field col s12 m12">
                                    <input
                                        id="name"
                                        type="text"
                                        name="badge"
                                        value={this.props.employee.badge}
                                        onChange={this.changeValue.bind(this)}
                                        className="validate" />
                                    <label for="name">Crachá</label>
                                </div>
                                <div className="input-field col s12 m12">
                                    <select
                                        onChange={this.changeValue.bind(this)}
                                        name="sector">
                                        <option value="" disabled selected>Escolha o setor</option>
                                        {
                                            this.renderSectorOptions()
                                        }
                                    </select>
                                    <label>Setor do funcionário</label>
                                </div>
                                <SubmitButton></SubmitButton>
                            </div>
                        </form>
                        :
                        this.showEmptySectorsMessage()
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    employee: state.employee.employee,
    sectors: state.sector.sectors
});

const mapDispatchToProps = dispatch => bindActionCreators({
    saveEmployee,
    changeValue
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm)