import Component from 'inferno-component';

export default class DeleteButton extends Component {

    render() {
        return (
            <td>
                <button
                    className="btn red"
                    onClick={this.props.onDelete}>
                    <i className="material-icons">delete</i>
                </button>
            </td>
        );
    }
}