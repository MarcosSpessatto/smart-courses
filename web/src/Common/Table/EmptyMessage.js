import Component from 'inferno-component';
import '../../main/App.css';

export default class EmptyMessage extends Component {

    render() {
        return (
            <span className="bold">Sem items.</span>
        );
    }
};