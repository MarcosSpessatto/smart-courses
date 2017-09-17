import Component from 'inferno-component';

class ModalButtom extends Component {

    render() {
        return (
            <button className="btn modal-trigger"
                data-target={this.props.name}>
                {this.props.title}
            </button>
        );
    }
}

export default ModalButtom;