import Component from 'inferno-component';
import { Link } from 'inferno-router';
import Logo from '../../main/logo';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="navbar-color">
                    <div className="nav-wrapper">
                        <Link to="user" className="work-name">
                            Smart Courses
                        </Link>
                        <a
                            className="brand-logo center"
                            href="https://infernojs.org/"
                            target="_blank">
                            <span className="made-with">Made With</span>
                            <Logo width="50" height="40" />
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to="user"
                                    activeClassName="active">
                                    Usuário
                                </Link>
                            </li>
                            <li>
                                <Link to="specialist"
                                    activeClassName="active">
                                    Especialista
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
