import Component from 'inferno-component';
import $ from 'jquery';
import './Modal.css'
import '../../main/App.css';

class Modal extends Component {

    componentDidMount() {
        $('.modal').modal();
    }

    render() {
        let CustomTag = this.props.componentContent;
        return (
            <div
                id={this.props.name}
                className="modal modal-fixed-footer">

                <div className="modal-content">

                    <h4>{this.props.title}</h4>

                    <CustomTag>

                    </CustomTag>
                </div>
                <div className="modal-footer text-center">
                    <span className="bold">Smart Courses</span>
                </div>
            </div>
        )
    }
}

export default Modal;