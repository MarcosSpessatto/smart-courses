import Component from 'inferno-component';
import SubmitButton from '../../Common/Forms/SubmitButton';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { saveCourse, changeValue } from './CourseActions';
import $ from 'jquery';


class CourseForm extends Component {

    constructor() {
        super();
        this.state = { typeOfCourse: 'area' };
    }

    componentDidMount() {
        this.initSelect();
    }

    componentDidUpdate() {
        this.initSelect();
    }

    initSelect() {
        $('select').material_select();
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.saveCourse(this.props.course);
    }

    showEmptyMessage(message) {
        return <strong>{message}</strong>
    }

    changeValue(event) {
        const actualState = this.props.course;

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

    renderModalityOptions() {
        return this
            .props
            .modalities
            .map(modality => (
                <option
                    key={modality.id}
                    value={modality.id}>{modality.type}</option>
            ));
    }

    renderTeacherOptions() {
        return this
            .props
            .teachers
            .map(teacher => (
                <option
                    key={teacher.id}
                    value={teacher.id}>{teacher.name}</option>
            ));
    }

    hasSectors() {
        return Boolean(this.props.sectors.length);
    }

    hasAreas() {
        return Boolean(this.props.areas.length);
    }

    hasModalities() {
        return Boolean(this.props.modalities.length);
    }

    hasTeachers() {
        return Boolean(this.props.teachers.length);
    }

    showSector() {
        return this.state.typeOfCourse && this.state.typeOfCourse === 'sector';
    }

    changeTypeOfCourse(event) {
        const bySector = () => this.state.typeOfCourse === 'sector';
        const objectToUpdateState = this.props.course;

        this.setState({ typeOfCourse: event.target.value });

        if (bySector())
            objectToUpdateState.area = '';
        else
            objectToUpdateState.sector = '';

        this.props.changeValue(objectToUpdateState);
    }

    render() {
        return (
            <div className="row">
                {
                    this.hasSectors()
                        ?
                        this.hasAreas()
                            ?
                            this.hasModalities()
                                ?
                                this.hasTeachers()
                                    ?
                                    <form
                                        className="col s12 m12"
                                        onSubmit={this.saveCourse.bind(this)}>

                                        <div className="row">
                                            <div className="input-field col s12 m12">
                                                <input
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    value={this.props.course.name}
                                                    onChange={this.changeValue.bind(this)}
                                                    className="validate" />
                                                <label for="name">Nome</label>
                                            </div>
                                            <div className="input-field col s12 m12">
                                                <input
                                                    id="name"
                                                    type="date"
                                                    name="start"
                                                    value={this.props.course.start}
                                                    onChange={this.changeValue.bind(this)}
                                                    className="validate" />
                                                <label for="name">Ínicio</label>
                                            </div>
                                            <div className="input-field col s12 m12">
                                                <input
                                                    id="name"
                                                    type="date"
                                                    name="end"
                                                    value={this.props.course.end}
                                                    onChange={this.changeValue.bind(this)}
                                                    className="validate" />
                                                <label for="name">Término</label>
                                            </div>
                                            <div className="input-field col s12 m12">
                                                <p class="range-field">
                                                    <input
                                                        type="range"
                                                        name="weight"
                                                        min="0"
                                                        max="10"
                                                        value={this.props.course.weight}
                                                        onChange={this.changeValue.bind(this)} />
                                                </p>
                                                <label for="name">Peso</label>
                                            </div>
                                            <div className="input-field col s12 m12">
                                                <select
                                                    onChange={this.changeTypeOfCourse.bind(this)}
                                                    name="sector">
                                                    <option value="area"> Por Área</option>
                                                    <option value="sector"> Por Setor</option>
                                                </select>
                                                <label>Tipo de curso</label>
                                            </div>
                                            {
                                                this
                                                    .showSector()
                                                    ?
                                                    <div className="input-field col s12 m12">
                                                        <select
                                                            onChange={this.changeValue.bind(this)}
                                                            name="sector">
                                                            <option value="" disabled selected>Escolha o setor</option>
                                                            {
                                                                this.renderSectorOptions()
                                                            }
                                                        </select>
                                                        <label>Setor do curso</label>
                                                    </div>
                                                    :
                                                    <div className="input-field col s12 m12">
                                                        <select
                                                            onChange={this.changeValue.bind(this)}
                                                            name="area">
                                                            <option value="" disabled selected>Escolha a área</option>
                                                            {
                                                                this.renderAreaOptions()
                                                            }
                                                        </select>
                                                        <label>Área do curso</label>
                                                    </div>
                                            }
                                            <div className="input-field col s12 m12">
                                                <select
                                                    onChange={this.changeValue.bind(this)}
                                                    name="modality">
                                                    <option value="" disabled selected>Escolha a modalidade</option>
                                                    {
                                                        this.renderModalityOptions()
                                                    }
                                                </select>
                                                <label>Modalidade do curso</label>
                                            </div>
                                            <div className="input-field col s12 m12">
                                                <select
                                                    onChange={this.changeValue.bind(this)}
                                                    name="teacher">
                                                    <option value="" disabled selected>Escolha o professor</option>
                                                    {
                                                        this.renderTeacherOptions()
                                                    }
                                                </select>
                                                <label>Professor responsável</label>
                                            </div>
                                            <SubmitButton></SubmitButton>
                                        </div>
                                    </form>
                                    :
                                    this.showEmptyMessage('Você deve cadastrar PROFESSORES para poder cadastrar um curso.')
                                :
                                this.showEmptyMessage('Você deve cadastrar MODALIDADES para poder cadastrar um curso.')
                            :
                            this.showEmptyMessage('Você deve cadastrar ÁREAS para poder cadastrar um curso.')
                        :
                        this.showEmptyMessage('Você deve cadastrar SETORES para poder cadastrar um curso.')
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    course: state.course.course,
    sectors: state.sector.sectors,
    areas: state.area.areas,
    modalities: state.modality.modalities,
    teachers: state.teacher.teachers
});

const mapDispatchToProps = dispatch => bindActionCreators({
    saveCourse,
    changeValue
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm)