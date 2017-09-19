import Component from 'inferno-component';
import SubmitButton from '../../Common/Forms/SubmitButton';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { saveTeacher, changeValue } from './TeacherActions';


class TeacherForm extends Component {

    saveTeacher(event) {
        event.preventDefault();
        this.props.saveTeacher(this.props.teacher);
    }

    render() {
        return (
            <div className="row">
                <form
                    className="col s12 m12"
                    onSubmit={this.saveTeacher.bind(this)}>

                    <div className="row">
                        <div className="input-field col s12 m12">
                            <input
                                id="name"
                                type="text"
                                value={this.props.teacher.name}
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
    teacher: state.teacher.teacher
});

const mapDispatchToProps = dispatch => bindActionCreators({
    saveTeacher,
    changeValue
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeacherForm)