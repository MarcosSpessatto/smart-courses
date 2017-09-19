import Component from 'inferno-component';
import $ from 'jquery'

class SubmitButton extends Component {

    dismissModal() {
        $('.modal').modal('close');
    }

    render() {
        return (
            <button
                className="btn"
                type="submit"
                name="action"
                onClick={this.dismissModal.bind(this)}>
                {this.props.text}
                <i className="material-icons right">{this.props.icon}</i>
            </button>
        );
    }
}
export default SubmitButton;