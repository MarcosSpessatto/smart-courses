import Component from 'inferno-component';
import Navbar from './Navbar/Navbar';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className='content-wrapper'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
