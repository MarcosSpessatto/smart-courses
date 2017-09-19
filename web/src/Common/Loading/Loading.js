import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';

class Loading extends Component {

    showLoading() {
        return this.props.isLoading;
    }

    render() {
        return (
            <div>
                {
                    this.showLoading()
                        ?
                        <div class="progress">
                            <div class="indeterminate"></div>
                        </div>
                        :
                        ''
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.loading.isLoading
});


export default connect(mapStateToProps)(Loading)