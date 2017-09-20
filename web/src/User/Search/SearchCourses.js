import Component from 'inferno-component';
import SubmitButton from '../../Common/Forms/SubmitButton';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';
import { searchCoursesByUser, changeValue } from './SearchCoursesActions';


class SearchCourses extends Component {

    searchCoursesByUser(event) {
        event.preventDefault();
        this.props.searchCoursesByUser(this.props.search.employeeBadge);
    }

    render() {
        return (
            <div className="row">
                <form
                    className="col s12 m12"
                    onSubmit={this.searchCoursesByUser.bind(this)}>
                    <div class="col s12 m12">
                        <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content">
                                    <div className="row">
                                        <div className="input-field col s12 m12">
                                            <input
                                                id="employeeBadge"
                                                type="text"
                                                value={this.props.search.employeeBadge}
                                                onChange={this.props.changeValue}
                                                className="validate" />
                                            <label for="name">Crachá</label>
                                        </div>
                                        <SubmitButton
                                            text="Pesquisar"
                                            icon="search">
                                        </SubmitButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search
});

const mapDispatchToProps = dispatch => bindActionCreators({
    searchCoursesByUser,
    changeValue
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchCourses)