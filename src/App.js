import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.css';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <Nav/>
<br />
      <div class="jumbotron jumbotron-fluid">
        <div class=".container-fluid">
          <h1 class="display-4 .text-white">Tavis Drum App</h1>
          <p class="lead .text-light">Press S, D or F to play sounds</p>
        </div>
      </div>
      <br style={{paddingTop: 1000}} />
      <Display/>
      
   
    </div>
  );
}

export default App;
